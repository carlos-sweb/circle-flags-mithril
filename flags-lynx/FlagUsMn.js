import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "us-mn" circle flag (mithril-lynx). */
const FlagUsMn = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#026" d="M0 0h352v512H0z"/><path fill="#338af3" d="M352 512h160V0H352L224 256Z"/><path fill="#eee" d="m112 176 17 40 40-17-17 40 40 17-40 17 17 40-40-17-17 40-17-40-40 17 17-40-40-17 40-17-17-40 40 17z"/></g>` }
  )
}

export default FlagUsMn
