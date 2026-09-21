import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "sd" circle flag. */
const FlagSd = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M43.6 109.4 512 144.7v222.6L43.8 397.2z"/><path fill="#d80027" d="M0 0h512v144.7H111z"/><path fill="#333" d="M111 367.3h401V512H0z"/><path fill="#496e2d" d="M0 0v512l256-256z"/></g>`)
    )
  }
}

export default FlagSd
