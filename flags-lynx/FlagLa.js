import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "la" circle flag (mithril-lynx). */
const FlagLa = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#d80027" d="M0 0h512v144.8l-45.8 113L512 367.4V512H0V367.4l46.3-111.1L0 144.8z"/><path fill="#0052b4" d="M0 144.8h512v222.6H0z"/><circle cx="256" cy="256.1" r="89" fill="#eee"/></g>` }
    )
  }
}

export default FlagLa
