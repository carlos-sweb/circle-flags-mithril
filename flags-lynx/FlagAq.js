import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "aq" circle flag (mithril-lynx). */
const FlagAq = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#338af3" d="M0 0h512v512H0z"/><path fill="#eee" d="m135 343-41-70 17-38-40-51-9-37 74 51 45-11 19-67 50-29 75 11 87 45 4 74 28 10v76l-53 94-64 20-59-14 15-25-7-26-8 7z"/></g>` }
  )
}

export default FlagAq
