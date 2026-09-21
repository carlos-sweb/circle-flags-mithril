import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "jp" circle flag (mithril-lynx). */
const FlagJp = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#eee" d="M0 0h512v512H0z"/><circle cx="256" cy="256" r="111.3" fill="#d80027"/></g>` }
    )
  }
}

export default FlagJp
