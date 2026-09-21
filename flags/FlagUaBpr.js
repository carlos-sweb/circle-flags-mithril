import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ua-bpr" circle flag. */
const FlagUaBpr = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="m0 167 256-32 256 32v178l-256 32L0 345Z"/><path fill="#338af3" d="M0 0h512v167H0z"/><path fill="#333" d="M0 345h512v167H0z"/></g>`)
  )
}

export default FlagUaBpr
