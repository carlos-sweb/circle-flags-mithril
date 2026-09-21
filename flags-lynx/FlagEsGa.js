import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "es-ga" circle flag (mithril-lynx). */
const FlagEsGa = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#eee" d="M0 63 63 0h449v449l-63 63H0z"/><path fill="#338af3" d="M0 0v63l449 449h63v-63L63 0H0z"/><path fill="#d80027" d="m211 181 46 16.4 44-16.4v-38l-18 9-27-27-27 27-18-9z"/><path fill="#0052b4" d="M186 181v103a70 70 0 0 0 140 0V181z"/></g>` }
    )
  }
}

export default FlagEsGa
