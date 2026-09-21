import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "yu" circle flag (mithril-lynx). */
const FlagYu = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 167 256-32 256 32v178l-256 32L0 345Z"/><path fill="#d80027" d="M0 345h512v167H0Z"/><path fill="#0052b4" d="M0 0h512v167H0Z"/><path fill="#ffda44" d="m137 413 309-222H66l309 222L256 51Z"/><path fill="#d80027" d="m183 350 189-136H140l188 136-72-221z"/></g>` }
  )
}

export default FlagYu
