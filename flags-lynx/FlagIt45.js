import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "it-45" circle flag (mithril-lynx). */
const FlagIt45 = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 0h512v512H0V0Z"/><path fill="#496e2d" d="M136 128v240h240V128H136Zm16 224V247l203 105H152Zm208-161a166 166 0 0 1-104 0 166 166 0 0 0-104 0v-47h208v47Z"/><path fill="#d80027" d="M136 384h240v16H136z"/></g>` }
  )
}

export default FlagIt45
