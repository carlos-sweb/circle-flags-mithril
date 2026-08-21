import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "by-historical" circle flag. */
const FlagByHistorical = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M512 0v170l-32 86 32 86v170H0V342l32-86-32-86V0Z"/><path fill="#d80027" d="M512 170v172H0V170Z"/></g>`)
  )
}

export default FlagByHistorical
