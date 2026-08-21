import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ru-da" circle flag. */
const FlagRuDa = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#0052b4" d="m0 167 256-32 256 32v178l-256 32L0 345Z"/><path fill="#d80027" d="M0 345h512v167H0Z"/><path fill="#6da544" d="M0 0h512v167H0Z"/></g>`)
  )
}

export default FlagRuDa
