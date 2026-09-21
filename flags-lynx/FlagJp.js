import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "jp" circle flag (mithril-lynx). */
const FlagJp = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 0h512v512H0z"/><circle cx="256" cy="256" r="111.3" fill="#d80027"/></g>` }
  )
}

export default FlagJp
