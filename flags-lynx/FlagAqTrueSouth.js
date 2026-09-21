import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "aq-true_south" circle flag (mithril-lynx). */
const FlagAqTrueSouth = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 256 256 28l256 228v256H0Z"/><path fill="#002266" d="m114 256 142 228 142-228-142 57ZM0 0h512v256H398L256 28 114 256H0Z"/></g>` }
  )
}

export default FlagAqTrueSouth
