import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "kongo" circle flag (mithril-lynx). */
const FlagKongo = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z"/><path fill="#d80027" d="M0 0h512v160H0Z"/><path fill="#ffda44" d="M0 352h512v160H0Z"/><path fill="#333" d="M144 423 256 79l112 344L75 211h362z"/><path fill="#eee" d="m175 381 81-250 81 250-213-154h264z"/></g>` }
  )
}

export default FlagKongo
