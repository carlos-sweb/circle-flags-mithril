import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "ru-dpr" circle flag (mithril-lynx). */
const FlagRuDpr = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z"/><path fill="#333" d="M512 0v170H0V0Z"/><path fill="#d80027" d="M512 342v170H0V342Z"/></g>` }
  )
}

export default FlagRuDpr
