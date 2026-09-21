import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "to" circle flag. */
const FlagTo = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 256 256 0h256v512H0z"/><path fill="#eee" d="M0 0h256v256H0z"/><path fill="#d80027" d="M167 133.6v-33.4h-33.4v33.4h-33.4V167h33.4v33.3H167V167h33.3v-33.4z"/></g>`)
    )
  }
}

export default FlagTo
