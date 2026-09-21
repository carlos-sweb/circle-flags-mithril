import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "au-aboriginal" circle flag. */
const FlagAuAboriginal = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#333" d="M0 0h512v256l-256 32L0 256Z"/><path fill="#d80027" d="M0 256h512v256H0Z"/><circle cx="256" cy="256" r="128" fill="#ffda44"/></g>`)
    )
  }
}

export default FlagAuAboriginal
