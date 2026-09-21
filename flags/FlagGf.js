import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "gf" circle flag. */
const FlagGf = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#6da544" d="m0 0 216.9 301.6L512 512V0z"/><path fill="#ffda44" d="m0 0 512 512H0z"/><path fill="#d80027" d="m256 121 90 270-234-168h288L166 391z"/></g>`)
    )
  }
}

export default FlagGf
