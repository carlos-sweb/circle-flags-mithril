import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "in-gj" circle flag. */
const FlagInGj = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M256 96 0 128v128l256 32 256-32V128L256 96zm0 256L0 384v128h512V384l-256-32z"/><path fill="#d80027" d="M0 0h512v128H0zm0 256h512v128H0z"/></g>`)
  )
}

export default FlagInGj
