import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "mc" circle flag (mithril-lynx). */
const FlagMc = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 256 258.2-43.3L512 256v256H0z"/><path fill="#a2001d" d="M0 0h512v256H0z"/></g>` }
  )
}

export default FlagMc
