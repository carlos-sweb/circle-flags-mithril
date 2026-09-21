import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "et-be" circle flag. */
const FlagEtBe = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="m0 160 256-32 256 32v192l-256 32L0 352Z"/><path fill="#333" d="M0 0h512v160H0Z"/><path fill="#496e2d" d="M0 352h512v160H0Z"/><path fill="#d80027" d="M0 0v512l256-256Z"/></g>`)
  )
}

export default FlagEtBe
