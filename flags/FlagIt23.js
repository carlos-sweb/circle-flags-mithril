import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "it-23" circle flag. */
const FlagIt23 = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#333" d="M0 0h256l64 256-64 256H0V0Z"/><path fill="#d80027" d="M256 0h256v512H256V0Z"/></g>`)
    )
  }
}

export default FlagIt23
