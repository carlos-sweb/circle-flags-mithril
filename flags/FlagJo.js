import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "jo" circle flag. */
const FlagJo = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m126 158 127.8-10.3L512 167v178l-254.9 32.3L126 335.9z"/><path fill="#333" d="M0 0h512v167H107z"/><path fill="#6da544" d="M107 345h405v167H0z"/><path fill="#d80027" d="M0 0v512l256-256z"/><path fill="#eee" d="m101.6 200.3 14 29.4 31.8-7.3-14.2 29.3 25.5 20.2-31.8 7.2.1 32.6-25.4-20.4-25.4 20.4V279l-31.7-7.2 25.5-20-14.2-29.4 31.8 7.3z"/></g>`)
  )
}

export default FlagJo
