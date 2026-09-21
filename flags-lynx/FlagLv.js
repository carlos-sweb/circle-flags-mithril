import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "lv" circle flag (mithril-lynx). */
const FlagLv = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#a2001d" d="M0 0h512v189.2l-38.5 70 38.5 63.6V512H0V322.8l39.4-63L0 189.1z"/><path fill="#eee" d="M0 189.2h512v133.6H0z"/></g>` }
    )
  }
}

export default FlagLv
