import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "id" circle flag (mithril-lynx). */
const FlagId = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#eee" d="m0 256 249.6-41.3L512 256v256H0z"/><path fill="#d80027" d="M0 0h512v256H0z"/></g>` }
    )
  }
}

export default FlagId
