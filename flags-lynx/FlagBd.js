import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "bd" circle flag (mithril-lynx). */
const FlagBd = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#496e2d" d="M0 0h512v512H0z"/><circle cx="200.3" cy="256" r="111.3" fill="#d80027"/></g>` }
    )
  }
}

export default FlagBd
