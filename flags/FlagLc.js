import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "lc" circle flag. */
const FlagLc = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#338af3" d="M0 0h512v512H0z"/><path fill="#eee" d="M161.4 345h189.2L256 122.4z"/><path fill="#333" d="M194.3 322.8 256 182.4l61.7 140.4z"/><path fill="#ffda44" d="M161.4 345h189.2L256 256z"/></g>`)
  )
}

export default FlagLc
