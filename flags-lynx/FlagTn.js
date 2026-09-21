import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "tn" circle flag (mithril-lynx). */
const FlagTn = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h512v512H0z"/><circle cx="256" cy="256" r="123" fill="#eee"/><path fill="#d80027" d="M251 167a89 89 0 1 0 67 153 72 72 0 0 1-34 8 72 72 0 1 1 34-136 89 89 0 0 0-67-25m20 42v36l-34 11 34 11v36l21-29 34 11-21-29 21-29-34 11z"/></g>` }
  )
}

export default FlagTn
