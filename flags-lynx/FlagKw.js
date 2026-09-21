import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "kw" circle flag (mithril-lynx). */
const FlagKw = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#eee" d="M138.4 147 512 167v178l-373.6 20z"/><path fill="#6da544" d="m0 0 138.4 167H512V0z"/><path fill="#d80027" d="m0 512 138.4-167H512v167z"/><path fill="#333" d="M167 167 0 0v512l167-167z"/></g>` }
    )
  }
}

export default FlagKw
