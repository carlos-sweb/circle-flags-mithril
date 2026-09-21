import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "pw" circle flag (mithril-lynx). */
const FlagPw = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#338af3" d="M0 0h512v512H0z"/><circle cx="200.3" cy="256" r="111.3" fill="#ffda44"/></g>` }
  )
}

export default FlagPw
