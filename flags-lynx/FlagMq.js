import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "mq" circle flag (mithril-lynx). */
const FlagMq = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#6da544" d="M0 0h512v256l-256 44Z"/><path fill="#333" d="M210 256h302v256H0z"/><path fill="#d80027" d="M0 0v512l256-256L0 0z"/></g>` }
    )
  }
}

export default FlagMq
