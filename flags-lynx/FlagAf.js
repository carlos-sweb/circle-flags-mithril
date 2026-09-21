import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "af" circle flag (mithril-lynx). */
const FlagAf = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#d80027" d="M145 0h222l32 256-32 256H145l-32-256Z"/><path fill="#496e2d" d="M367 0h145v512H367Z"/><path fill="#333" d="M0 0h145v512H0Z"/><path fill="#ffda44" d="M256 167a89 89 0 0 0 0 178 89 89 0 0 0 0-178m0 33a56 56 0 0 1 0 112 56 56 0 0 1 0-112m0 28.5c-12 0-22 10-22 22v33h44v-33c0-12-10-22-22-22"/></g>` }
    )
  }
}

export default FlagAf
