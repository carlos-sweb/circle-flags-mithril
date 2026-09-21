import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "bz" circle flag (mithril-lynx). */
const FlagBz = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#0052b4" d="m0 44.5 257.8-23.7L512 44.5v423l-252.5 26L0 467.5z"/><circle cx="256" cy="256" r="122.4" fill="#eee"/><circle cx="256" cy="256" r="100.2" fill="#6da544"/><circle cx="256" cy="256" r="66.8" fill="#eee"/><path fill="#0052b4" d="M256 239.3 219.8 256v27.8l36.2 22.3 36.2-22.3V256z"/><path fill="#ffda44" d="M219.8 222.6h72.4V256h-72.4z"/><path fill="#a2001d" d="M0 0h512v44.5H0zm0 467.5h512V512H0z"/></g>` }
    )
  }
}

export default FlagBz
