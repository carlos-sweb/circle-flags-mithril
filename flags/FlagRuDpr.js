import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ru-dpr" circle flag. */
const FlagRuDpr = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z"/><path fill="#333" d="M512 0v170H0V0Z"/><path fill="#d80027" d="M512 342v170H0V342Z"/></g>`)
    )
  }
}

export default FlagRuDpr
