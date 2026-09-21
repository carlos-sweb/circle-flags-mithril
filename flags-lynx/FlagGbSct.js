import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "gb-sct" circle flag (mithril-lynx). */
const FlagGbSct = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#0052b4" d="M0 68 68 0h376l68 68v376l-68 68H68L0 444Z"/><path fill="#eee" d="M0 0v68l188 188L0 444v68h68l188-188 188 188h68v-68L324 256 512 68V0h-68L256 188 68 0H0z"/></g>` }
    )
  }
}

export default FlagGbSct
