import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "bf" circle flag (mithril-lynx). */
const FlagBf = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#d80027" d="M0 0h512v256l-255.2 48L0 256z"/><path fill="#6da544" d="M0 256h512v256H0z"/><path fill="#ffda44" d="m256 167 19.3 59.5H338l-50.6 36.8 19.3 59.5L256 286l-50.6 36.8 19.3-59.5-50.6-36.8h62.6z"/></g>` }
    )
  }
}

export default FlagBf
