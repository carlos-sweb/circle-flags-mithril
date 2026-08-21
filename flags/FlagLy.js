import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ly" circle flag. */
const FlagLy = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#333" d="m0 144 256-32 256 32v224l-256 32L0 368Z"/><path fill="#d80027" d="M0 0h512v144H0Z"/><path fill="#496e2d" d="M0 368h512v144H0Z"/><path fill="#eee" d="M226 167a89 89 0 1 0 67 153 72 72 0 0 1-35 8 72 72 0 1 1 35-136 89 89 0 0 0-67-25m90 42v36l-34 11 34 11v36l21-29 34 11-21-29 21-29-34 11z"/></g>`)
  )
}

export default FlagLy
