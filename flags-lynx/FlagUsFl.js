import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "us-fl" circle flag (mithril-lynx). */
const FlagUsFl = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 68 68 0h376l68 68v376l-68 68H68L0 444Z"/><path fill="#d80027" d="M0 0v68l188 188L0 444v68h68l188-188 188 188h68v-68L324 256 512 68V0h-68L256 188 68 0Z"/><circle cx="256" cy="256" r="96" fill="#ff9811"/><circle cx="256" cy="256" r="64" fill="#6da544"/></g>` }
  )
}

export default FlagUsFl
