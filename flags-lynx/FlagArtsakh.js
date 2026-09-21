import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "artsakh" circle flag (mithril-lynx). */
const FlagArtsakh = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#0052b4" d="m0 171 256-32 256 32v170l-256 32L0 341Z"/><path fill="#d80027" d="M0 0h512v171H0Z"/><path fill="#ff9811" d="M0 341h512v171H0Z"/><path fill="#eee" d="M428 0v57h-43v57h-43v57h-43v57h-43v56h43v57h43v57h43v57h43v57h84v-57h-41v-57h-43v-57h-43v-57h-43v-56h43v-57h43v-57h43V57h41V0z"/></g>` }
  )
}

export default FlagArtsakh
