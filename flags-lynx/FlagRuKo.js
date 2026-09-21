import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "ru-ko" circle flag (mithril-lynx). */
const FlagRuKo = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#6da544" d="m0 167 256-32 256 32v178l-256 32L0 345Z"/><path fill="#eee" d="M0 345h512v167H0Z"/><path fill="#0052b4" d="M0 0h512v167H0Z"/></g>` }
    )
  }
}

export default FlagRuKo
