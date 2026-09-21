import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "sy" circle flag. */
const FlagSy = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"/><path d="M0 0h512v167H0z" fill="#496e2d"/><path fill="#333" d="M0 345h512v167H0z"/><path d="m110 200 36 112-95-69h117l-94 69zm146 0 36 112-94-69h117l-95 69zm146 0 36 112-94-69h117l-95 69z" fill="#d80027"/></g>`)
    )
  }
}

export default FlagSy
