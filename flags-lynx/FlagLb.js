import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "lb" circle flag (mithril-lynx). */
const FlagLb = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h512v144.8l-45.8 113L512 367.4V512H0V367.4l46.3-111.1L0 144.8z"/><path fill="#eee" d="M0 144.8h512v222.6H0z"/><path fill="#6da544" d="M322.8 300.5 256 178.1l-66.8 122.4h50.1V334h33.4v-33.4z"/></g>` }
  )
}

export default FlagLb
