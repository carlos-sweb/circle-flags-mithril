import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "co" circle flag. */
const FlagCo = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="m0 384 255.8-29.7L512 384v128H0z"/><path fill="#0052b4" d="m0 256 259.5-31L512 256v128H0z"/><path fill="#ffda44" d="M0 0h512v256H0z"/></g>`)
    )
  }
}

export default FlagCo
