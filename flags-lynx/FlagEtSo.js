import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "et-so" circle flag (mithril-lynx). */
const FlagEtSo = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z"/><path fill="#496e2d" d="M0 0h512v160H0Z"/><path fill="#d80027" d="M0 352h512v160H0Z"/><path fill="#338af3" d="M0 0v512l256-256Z"/><path fill="#eee" d="M132 168v176L28 202l168 54-168 54Z"/></g>` }
  )
}

export default FlagEtSo
