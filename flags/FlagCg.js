import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "cg" circle flag. */
const FlagCg = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="M384 0h128v128L352 352 128 512H0V384l160-224Z"/><path fill="#6da544" d="M0 384 384 0H0Z"/><path fill="#d80027" d="M512 128 128 512h384z"/></g>`)
    )
  }
}

export default FlagCg
