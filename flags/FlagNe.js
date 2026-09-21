import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ne" circle flag. */
const FlagNe = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 144.7 255.3-36.5L512 144.7v222.6L250.5 407 0 367.3z"/><path fill="#ff9811" d="M0 0h512v144.7H0z"/><path fill="#6da544" d="M0 367.3h512V512H0z"/><circle cx="256" cy="256.1" r="89" fill="#ff9811"/></g>`)
    )
  }
}

export default FlagNe
