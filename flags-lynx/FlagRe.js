import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "re" circle flag (mithril-lynx). */
const FlagRe = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#0052b4" d="M64 0 0 64v160l32 32-32 32v224l256-32 256 32V288l-32-32 32-32V64L448 0H288l-32 32-32-32H64z"/><path fill="#d80027" d="M256 256 0 512h512z"/><path fill="#ffda44" d="M0 224v64l512-64v64z"/><path fill="#ffda44" d="M256 256 0 64V0h64zm0 0L448 0h64v64zm0 0L224 0h64z"/></g>` }
  )
}

export default FlagRe
