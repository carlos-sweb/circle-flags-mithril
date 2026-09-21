import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "vn" circle flag (mithril-lynx). */
const FlagVn = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#d80027" d="M0 0h512v512H0Z"/><path fill="#ffda44" d="m176 378 208-150H128l208 150-80-244Z"/></g>` }
    )
  }
}

export default FlagVn
