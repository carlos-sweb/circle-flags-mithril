import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "cn-xj" circle flag (mithril-lynx). */
const FlagCnXj = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#338af3" d="M0 0h512v512H0Z"/><path fill="#eee" d="m312 256 116-38-72 99V195l72 99zm8 69a128 128 0 1 1 0-137 102 102 0 1 0 0 137z"/></g>` }
    )
  }
}

export default FlagCnXj
