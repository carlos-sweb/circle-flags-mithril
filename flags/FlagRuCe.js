import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "ru-ce" circle flag. */
const FlagRuCe = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="m96 357 208-32 208 32v155H96l-32-78Z"/><path fill="#496e2d" d="M96 0h416v293l-208 32-208-32-32-147Z"/><path fill="#eee" d="M0 0v512h96V357h416v-64H96V0Z"/></g>`)
    )
  }
}

export default FlagRuCe
