import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "south_ossetia" circle flag (mithril-lynx). */
const FlagSouthOssetia = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"/><path fill="#eee" d="M0 0h512v167H0z"/><path fill="#ffda44" d="M0 345h512v167H0z"/></g>` }
  )
}

export default FlagSouthOssetia
