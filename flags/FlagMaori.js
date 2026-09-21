import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "maori" circle flag. */
const FlagMaori = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 68.6 247.8-24.7L512 299v93.9l-399.2 36.2L0 162.5z"/><path fill="#333" d="M0 0v68.6h178a115.2 115.2 0 1 1 0 230.4h334V0z"/><path fill="#d80027" d="M0 162.5V512h512V392.9H178a93.9 93.9 0 1 1 0-187.8 47 47 0 0 1 0 93.9 68.3 68.3 0 0 0 0-136.5z"/></g>`)
    )
  }
}

export default FlagMaori
