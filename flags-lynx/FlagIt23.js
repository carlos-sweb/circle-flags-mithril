import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "it-23" circle flag (mithril-lynx). */
const FlagIt23 = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#333" d="M0 0h256l64 256-64 256H0V0Z"/><path fill="#d80027" d="M256 0h256v512H256V0Z"/></g>` }
    )
  }
}

export default FlagIt23
