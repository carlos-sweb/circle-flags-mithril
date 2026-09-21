import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "tz" circle flag (mithril-lynx). */
const FlagTz = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#ffda44" d="M399 0 0 399v45l68 68h45l399-399V68L444 0z"/><path fill="#333" d="M444 0 0 444v68h68L512 68V0z"/><path fill="#338af3" d="m113 512 399-399v399z"/><path fill="#6da544" d="M0 399V0h399z"/></g>` }
    )
  }
}

export default FlagTz
