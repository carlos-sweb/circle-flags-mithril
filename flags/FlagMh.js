import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "mh" circle flag. */
const FlagMh = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#0052b4" d="M0 0h397.6L512 114.2V512H0z"/><path fill="#eee" d="M512 0H397.6L0 512 493.4 53.7z"/><path fill="#ff9811" d="m0 512 512-397.8V0z"/><path fill="#eee" d="M222.2 150.1 191 164.8l16.7 30.3-34-6.5-4.3 34.3-23.6-25.2-23.7 25.2-4.3-34.3-33.9 6.5 16.6-30.3-31.2-14.7 31.2-14.7L84 105.1l34 6.5 4.2-34.3 23.7 25.3 23.6-25.3 4.3 34.3 34-6.5-16.7 30.3z"/></g>`)
  )
}

export default FlagMh
