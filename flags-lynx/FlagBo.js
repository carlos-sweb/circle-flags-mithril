import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "bo" circle flag (mithril-lynx). */
const FlagBo = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#ffda44" d="m0 167 252.9-29.3L512 167v178l-255.7 25.7L0 345z"/><path fill="#d80027" d="M0 0h512v167H0z"/><path fill="#6da544" d="M0 345h512v167H0z"/></g>` }
    )
  }
}

export default FlagBo
