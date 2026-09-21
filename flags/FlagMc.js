import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "mc" circle flag. */
const FlagMc = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 256 258.2-43.3L512 256v256H0z"/><path fill="#a2001d" d="M0 0h512v256H0z"/></g>`)
    )
  }
}

export default FlagMc
