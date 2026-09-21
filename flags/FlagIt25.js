import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "it-25" circle flag. */
const FlagIt25 = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#6da544" d="M0 0h512v512H0V0Z"/><path fill="#eee" d="M253.9 161.3a62.7 62.7 0 1 1 71.5 30.3 33.7 33.7 0 1 0 25.3 62.3 62.7 62.7 0 1 1-30.3 71.5 33.7 33.7 0 1 0-62.3 25.3 62.7 62.7 0 1 1-71.5-30.3 33.7 33.7 0 1 0-25.3-62.3 62.7 62.7 0 1 1 30.3-71.5 33.7 33.7 0 1 0 62.3-25.3Z"/></g>`)
    )
  }
}

export default FlagIt25
