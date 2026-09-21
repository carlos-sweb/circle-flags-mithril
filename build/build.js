import { readdir, readFile } from 'fs/promises'
import { join, basename } from 'path'
import { existsSync, mkdirSync } from 'fs'

const FLAGS_DIR = join(import.meta.dir, '../node_modules/circle-flags/flags')
const OUT_DIR   = join(import.meta.dir, '../flags')
const OUT_LYNX  = join(import.meta.dir, '../flags-lynx')

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })
if (!existsSync(OUT_LYNX)) mkdirSync(OUT_LYNX, { recursive: true })

/**
 * Convert a circle-flags code (e.g. "us", "gb-eng", "aq-true_south")
 * to a PascalCase component name with "Flag" prefix.
 *
 * Examples:
 *   us              → FlagUs
 *   gb-eng          → FlagGbEng
 *   aq-true_south   → FlagAqTrueSouth
 */
function toComponentName(code) {
  const parts = code.split(/[-_]/)
  const pascal = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('')
  return `Flag${pascal}`
}

/**
 * Extract inner SVG content and read viewBox (in case any differ).
 */
function parseSvg(svgContent) {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 512 512'
  const inner = svgContent
    .replace(/^[\s\S]*?<svg[^>]*>/i, '')
    .replace(/<\/svg>\s*$/i, '')
    .trim()
  return { inner, viewBox }
}

const files = (await readdir(FLAGS_DIR))
  .filter(f => f.endsWith('.svg'))
  .sort()

const exportLines = []
const generatedNames = []

for (const file of files) {
  const code          = basename(file, '.svg')
  const componentName = toComponentName(code)

  const svgRaw = await readFile(join(FLAGS_DIR, file), 'utf8')
  const { inner, viewBox } = parseSvg(svgRaw)

  const svgSafe = inner
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')

  const attrsExpr = viewBox === '0 0 512 512'
    ? `{ ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) }`
    : `{ ..._attrs(vnode.attrs?.size), viewBox: '${viewBox}', ...(vnode.attrs || {}) }`

  const lynxAttrsExpr = viewBox === '0 0 512 512'
    ? `{ ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: \`${svgSafe}\` }`
    : `{ ..._attrs(vnode.attrs?.size), viewBox: '${viewBox}', ...(vnode.attrs || {}), content: \`${svgSafe}\` }`

  const componentCode = `import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "${code}" circle flag. */
const ${componentName} = {
  view: (vnode) => m(
    'svg',
    ${attrsExpr},
    m.trust(\`${svgSafe}\`)
  )
}

export default ${componentName}
`

  const lynxComponentCode = `import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "${code}" circle flag (mithril-lynx). */
const ${componentName} = {
  view: (vnode) => m(
    'svg',
    ${lynxAttrsExpr}
  )
}

export default ${componentName}
`

  const dtsCode = `import type { Vnode } from 'mithril'
declare const ${componentName}: { view: (vnode: Vnode<{ size?: number; [key: string]: any }>) => any }
export default ${componentName}
`

  await Bun.write(join(OUT_DIR, `${componentName}.js`), componentCode)
  await Bun.write(join(OUT_DIR, `${componentName}.d.ts`), dtsCode)
  await Bun.write(join(OUT_LYNX, `${componentName}.js`), lynxComponentCode)
  await Bun.write(join(OUT_LYNX, `${componentName}.d.ts`), dtsCode)

  exportLines.push(`export { default as ${componentName} } from './flags/${componentName}.js'`)
  generatedNames.push({ code, componentName })
}

// index.js
await Bun.write(join(import.meta.dir, '../index.js'), exportLines.join('\n') + '\n')

// index.d.ts
const dtsExports = generatedNames.map(({ componentName }) =>
  `export declare const ${componentName}: { view: (vnode: import('mithril').Vnode<{ size?: number; [key: string]: any }>) => any }`
).join('\n')

await Bun.write(
  join(import.meta.dir, '../index.d.ts'),
  `import type { Vnode } from 'mithril'\n\n${dtsExports}\n`
)

console.log(`✓ Generated ${generatedNames.length} flag components in flags/`)
console.log(`✓ Generated ${generatedNames.length} flag components in flags-lynx/`)
console.log(`✓ Written index.js and index.d.ts`)
console.log('\nSample mappings:')
generatedNames.slice(0, 5).forEach(({ code, componentName }) =>
  console.log(`  ${code.padEnd(20)} → ${componentName}`)
)
