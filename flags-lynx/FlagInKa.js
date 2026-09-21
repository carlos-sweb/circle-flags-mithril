import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "in-ka" circle flag (mithril-lynx). */
const FlagInKa = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="m0 256 256.5-36.4L512 256v256H0z"/><path fill="#ffda44" d="M0 0h512v256H0z"/></g>` }
  )
}

export default FlagInKa
