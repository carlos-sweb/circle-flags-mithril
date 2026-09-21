import m from 'mithril-runtime'

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

export function mergeStyle(px, style) {
  const base = { width: `${px}px`, height: `${px}px` }
  if (!style || typeof style === 'string') return base
  return { ...base, ...style }
}

/** @param {string} inner SVG children markup (no outer <svg>)
 *  @param {(size:number)=>object} defaultsFn
 *  @param {number} defaultSize
 */
export function lynxIcon(inner, defaultsFn, defaultSize = 512) {
  return {
    view(vnode) {
      const attrs = vnode.attrs || {}
      const { size, style, class: cls, className, content: _drop, ...rest } = attrs
      const outer = {}
      const svgProps = {}
      for (const [k, v] of Object.entries(rest)) {
        if (k.startsWith('on') || k.startsWith('bind')) outer[k] = v
        else svgProps[k] = v
      }
      const px = Number(size ?? svgProps.width ?? svgProps.height ?? defaultSize)
      const merged = { xmlns: 'http://www.w3.org/2000/svg', ...defaultsFn(px), ...svgProps }
      delete merged.size
      delete merged.style
      delete merged.content
      let open = '<svg'
      for (const [k, v] of Object.entries(merged)) {
        if (v == null) continue
        open += ` ${k}="${escapeAttr(v)}"`
      }
      open += '>'
      if (cls != null || className != null) outer.class = cls ?? className
      outer.style = mergeStyle(px, style)
      outer.content = open + inner + '</svg>'
      return m('svg', outer)
    }
  }
}
