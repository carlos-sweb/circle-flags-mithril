import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "ng" circle flag (mithril-lynx). */
const FlagNg = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#6da544" d="M0 0v512h160l96-64 96 64h160V0H352l-96 64-96-64Z"/><path fill="#eee" d="M160 0h192v512H160Z"/></g>` }
    )
  }
}

export default FlagNg
