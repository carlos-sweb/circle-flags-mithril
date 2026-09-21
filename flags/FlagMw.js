import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "mw" circle flag. */
const FlagMw = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"/><path fill="#333" d="M0 0h512v167H0z"/><path fill="#496e2d" d="M0 345h512v167H0z"/><path fill="#d80027" d="m332.5 122.4-31.2-14.7 16.6-30.3-34 6.5-4.3-34.3L256 75l-23.6-25.3L228 84l-34-6.5 16.7 30.3-31.3 14.7z"/></g>`)
  )
}

export default FlagMw
