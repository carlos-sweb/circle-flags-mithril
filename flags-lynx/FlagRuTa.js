import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "ru-ta" circle flag (mithril-lynx). */
const FlagRuTa = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#eee" d="m0 224 256-32 256 32v64l-256 32L0 288Z"/><path fill="#496e2d" d="M0 0h512v224H0z"/><path fill="#d80027" d="M0 288h512v224H0z"/></g>` }
    )
  }
}

export default FlagRuTa
