import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "et-ti" circle flag. */
const FlagEtTi = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h512v512H0l64-256Z"/><path fill="#ffda44" d="M0 0v512l256-256Zm404 168v176L300 202l168 54-168 54Z"/></g>`)
    )
  }
}

export default FlagEtTi
