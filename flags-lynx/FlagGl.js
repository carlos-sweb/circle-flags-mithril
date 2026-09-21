import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "gl" circle flag (mithril-lynx). */
const FlagGl = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#d80027" d="m0 256 259-45.3L512 256v256H0z"/><path fill="#eee" d="M0 0h512v256H0z"/><path fill="#eee" d="M55.7 256a122.4 122.4 0 1 0 244.8 0l-123-24z"/><path fill="#d80027" d="M55.7 256a122.4 122.4 0 1 1 244.8 0z"/></g>` }
    )
  }
}

export default FlagGl
