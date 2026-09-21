import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "gb-eng" circle flag. */
const FlagGbEng = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 0h208l48 32 48-32h208v208l-32 48 32 48v208H304l-48-32-48 32H0V304l32-48-32-48Z"/><path fill="#d80027" d="M208 0v208H0v96h208v208h96V304h208v-96H304V0h-96z"/></g>`)
  )
}

export default FlagGbEng
