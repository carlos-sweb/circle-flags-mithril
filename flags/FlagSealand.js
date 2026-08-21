import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "sealand" circle flag. */
const FlagSealand = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M512 0v160L368 368 160 512H0l224-288Z"/><path fill="#d80027" d="M0 512 512 0H0Z"/><path fill="#333" d="M512 160 160 512h352z"/></g>`)
  )
}

export default FlagSealand
