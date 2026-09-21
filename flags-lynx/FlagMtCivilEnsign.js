import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "mt-civil_ensign" circle flag (mithril-lynx). */
const FlagMtCivilEnsign = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#d80027" d="M0 0h512v512H0z"/><path fill="#eee" d="M0 0v512h512V0zm48 48h416v416H48zm141 47 67 161 67-161-67 67zm67 161 161 67-67-67 67-67zm0 0-67 161 67-67 67 67zm0 0L95 189l67 67-67 67z"/></g>` }
    )
  }
}

export default FlagMtCivilEnsign
