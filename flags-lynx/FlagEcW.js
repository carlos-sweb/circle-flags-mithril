import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "ec-w" circle flag (mithril-lynx). */
const FlagEcW = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#eee" d="m0 167 254.6-36.6L512 166.9v178l-254.6 36.4L0 344.9z"/><path fill="#6da544" d="M0 0h512v166.9H0z"/><path fill="#0052b4" d="M0 344.9h512V512H0z"/></g>` }
    )
  }
}

export default FlagEcW
