import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "in-or" circle flag. */
const FlagInOr = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="m0 160 256-32 256 32v192l-256 32L0 352Z"/><path fill="#d80027" d="M0 0h512v160H0Z"/><path fill="#eee" d="M0 352h512v160H0Z"/></g>`)
    )
  }
}

export default FlagInOr
