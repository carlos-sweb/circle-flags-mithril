import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ewe" circle flag. */
const FlagEwe = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="m0 167 256-32 256 32v178l-256 32L0 345Z"/><path fill="#6da544" d="M0 0h512v167H0zm0 345h512v167H0z"/><path fill="#ffda44" d="m110 200 36 112-95-69h117l-94 69zm146 0 36 112-94-69h117l-95 69zm146 0 36 112-94-69h117l-95 69z"/></g>`)
  )
}

export default FlagEwe
