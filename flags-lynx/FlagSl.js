import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "sl" circle flag (mithril-lynx). */
const FlagSl = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#eee" d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"/><path fill="#6da544" d="M0 0h512v167H0z"/><path fill="#338af3" d="M0 345h512v167H0z"/></g>` }
    )
  }
}

export default FlagSl
