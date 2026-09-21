import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "transnistria" circle flag (mithril-lynx). */
const FlagTransnistria = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#a2001d" d="M0 0h512v189.5l-39 62 39 71.6V512H0V323l40.8-67L0 189.5z"/><path fill="#6da544" d="M0 189.5h512v133.6H0z"/></g>` }
    )
  }
}

export default FlagTransnistria
