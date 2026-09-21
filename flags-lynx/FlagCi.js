import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "ci" circle flag (mithril-lynx). */
const FlagCi = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M167 0h178l31 253.2L345 512H167l-33.4-257.4z"/><path fill="#ff9811" d="M0 0h167v512H0z"/><path fill="#6da544" d="M345 0h167v512H345z"/></g>` }
  )
}

export default FlagCi
