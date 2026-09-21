import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "qa" circle flag (mithril-lynx). */
const FlagQa = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#eee" d="M0 0h173l61 255.8L173.4 512H0z"/><path fill="#751a46" d="m173 0-72.7 30.8L176 63l-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.1 75.7 32.2-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.2 73.1 31H512V0z"/></g>` }
    )
  }
}

export default FlagQa
