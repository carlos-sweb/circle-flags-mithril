import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ua-kpr" circle flag. */
const FlagUaKpr = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#0052b4" d="M128 0H0v128l160 224 224 160h128V384L352 160Z"/><path fill="#eee" d="M512 384 128 0h384Z"/><path fill="#ffda44" d="m0 128 384 384H0z"/></g>`)
    )
  }
}

export default FlagUaKpr
