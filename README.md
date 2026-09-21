# circle-flags-mithril

[Circle Flags](https://github.com/HatScripts/circle-flags) SVGs as [Mithril.js](https://mithril.js.org/) components. Based on the same build approach as [lucide-mithril](https://github.com/carlos-sweb/lucide-mithril).

## Install

```bash
bun add circle-flags-mithril
# or
npm install circle-flags-mithril
```

## Usage

Each component corresponds to a country/region code, prefixed with `Flag` and converted to PascalCase.

```js
import m from 'mithril'
import { FlagUs, FlagCl, FlagGbEng } from 'circle-flags-mithril'

// Basic usage — renders at the default 512×512 size
m(FlagUs)

// Custom size (icons are circular/square)
m(FlagCl, { size: 64 })

// Any additional SVG attributes are passed through
m(FlagGbEng, { size: 48, class: 'my-flag' })
```

### Component naming

| Code              | Component name       |
|-------------------|----------------------|
| `us`              | `FlagUs`             |
| `cl`              | `FlagCl`             |
| `gb-eng`          | `FlagGbEng`          |
| `aq-true_south`   | `FlagAqTrueSouth`    |
| `au-aboriginal`   | `FlagAuAboriginal`   |

All 430 flags from circle-flags are available.

## mithril-lynx (Lynx)

[mithril-lynx](https://www.npmjs.com/package/mithril-lynx) does not support `m.trust`. On Lynx, SVG markup is passed through the native `<svg>` `content` attribute instead.

Use the parallel `flags-lynx/` components, which import `mithril-runtime` and set `content`:

```js
import m from 'mithril-runtime'
import FlagUs from 'circle-flags-mithril/flags-lynx/FlagUs.js'

const MyComponent = {
  view: () => m('view', [
    m(FlagUs, { size: 64 }),
  ]),
}
```

The web entry (`circle-flags-mithril` / `flags/*`) is unchanged and still uses `m.trust`.

`mithril-runtime` is an optional peer dependency: install it when you use `flags-lynx/*`.

## Build

To regenerate the components from the latest version of circle-flags:

```bash
bun run build
```

The build script reads SVGs directly from the `circle-flags` npm package
(`node_modules/circle-flags/flags/`), so no manual cloning is needed.

It generates:

- `flags/` — Mithril web components (`m.trust`)
- `flags-lynx/` — mithril-lynx components (`content` attribute)

## Project structure

```
circle-flags-mithril/
├── build/
│   └── build.js          # Build script
├── flags/                # Generated flag components (430 files)
│   ├── FlagUs.js
│   ├── FlagCl.js
│   └── ...
├── flags-lynx/           # Generated mithril-lynx flag components
│   ├── FlagUs.js
│   └── ...
├── test/
│   ├── index.html        # Usage example
│   └── main.js
├── default_attrs.js      # Default SVG attributes (size, viewBox)
├── default_attrs.d.ts    # TypeScript types for default_attrs
├── index.js              # Generated entry point (all exports)
└── index.d.ts            # Generated TypeScript declarations
```

## License

MIT — flag SVG data is sourced from [circle-flags](https://github.com/HatScripts/circle-flags) (MIT).
