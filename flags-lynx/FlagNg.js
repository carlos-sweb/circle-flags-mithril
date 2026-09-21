import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "ng" circle flag (mithril-lynx). */
const FlagNg = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#6da544" d="M0 0v512h160l96-64 96 64h160V0H352l-96 64-96-64Z"/><path fill="#eee" d="M160 0h192v512H160Z"/></g>` }
  )
}

export default FlagNg
