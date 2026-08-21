import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "transnistria" circle flag. */
const FlagTransnistria = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#a2001d" d="M0 0h512v189.5l-39 62 39 71.6V512H0V323l40.8-67L0 189.5z"/><path fill="#6da544" d="M0 189.5h512v133.6H0z"/></g>`)
  )
}

export default FlagTransnistria
