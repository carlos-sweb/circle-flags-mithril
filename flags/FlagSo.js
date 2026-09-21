import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "so" circle flag. */
const FlagSo = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#338af3" d="M0 0h512v512H0z"/><path fill="#eee" d="m256 133.6 27.6 85H373L300.7 271l27.6 85-72.3-52.5-72.3 52.6 27.6-85-72.3-52.6h89.4z"/></g>`)
  )
}

export default FlagSo
