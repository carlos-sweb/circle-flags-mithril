import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "ae" circle flag (mithril-lynx). */
const FlagAe = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#a2001d" d="M0 0h167l52.3 252L167 512H0z"/><path fill="#eee" d="m167 167 170.8-44.6L512 167v178l-173.2 36.9L167 345z"/><path fill="#6da544" d="M167 0h345v167H167z"/><path fill="#333" d="M167 345h345v167H167z"/></g>` }
    )
  }
}

export default FlagAe
