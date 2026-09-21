import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "au-aboriginal" circle flag (mithril-lynx). */
const FlagAuAboriginal = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#333" d="M0 0h512v256l-256 32L0 256Z"/><path fill="#d80027" d="M0 256h512v256H0Z"/><circle cx="256" cy="256" r="128" fill="#ffda44"/></g>` }
    )
  }
}

export default FlagAuAboriginal
