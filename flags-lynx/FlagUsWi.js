import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "us-wi" circle flag (mithril-lynx). */
const FlagUsWi = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#0052b4" d="M0 0h512v512H0z"/><path fill="#ffda44" d="M167 156v111c0 68 89 89 89 89s89-21 89-89V156Z"/><path fill="#eee" d="M112 64h288v48H112Zm64 336h160v48H176Z"/></g>` }
    )
  }
}

export default FlagUsWi
