import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "et-ha" circle flag. */
const FlagEtHa = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 0h512v64l-32 48 32 48v192l-32 48 32 48v64H0v-64l32-48-32-48V160l32-48L0 64Z"/><path fill="#d80027" d="M0 64h512v96H0z"/><path fill="#6da544" d="M0 352h512v96H0z"/><circle cx="256" cy="256" r="72" fill="#338af3"/></g>`)
  )
}

export default FlagEtHa
