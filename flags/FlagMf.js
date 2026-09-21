import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "mf" circle flag. */
const FlagMf = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 128V0h512v128L299 512h-86z"/><circle cx="256" cy="213" r="57" fill="#ffda44"/><path fill="#eee" d="M185 213h142l-71 128Z"/><path fill="#d80027" d="M256 341 142 235h228z"/><path fill="#0052b4" d="m0 128 213 213v171H0Zm512 0L299 341v171h213z"/></g>`)
    )
  }
}

export default FlagMf
