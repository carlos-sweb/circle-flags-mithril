import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "tt" circle flag. */
const FlagTt = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 110.2 110.2 0H512v401.8L401.8 512H0z"/><path fill="#eee" d="M110.2 0H63L0 63v47.2L401.8 512H449l63-63v-47.2z"/><path fill="#333" d="M512 512v-63L63 0H0v63l449 449z"/></g>`)
    )
  }
}

export default FlagTt
