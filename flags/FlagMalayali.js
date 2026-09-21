import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "malayali" circle flag. */
const FlagMalayali = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"/><path fill="#d80027" d="M0 0h512v167H0z"/><path fill="#338af3" d="M0 345h512v167H0z"/></g>`)
  )
}

export default FlagMalayali
