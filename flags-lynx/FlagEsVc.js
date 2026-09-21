import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "es-vc" circle flag (mithril-lynx). */
const FlagEsVc = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#ffda44" d="M0 0h512v512H0z"/><path fill="#d80027" d="M111 57h401v57H111zm0 114h401v57H111zm0 114h401v56H111zm0 113h401v57H111z"/><path fill="#0052b4" d="M0 0h111v512H0z"/></g>` }
    )
  }
}

export default FlagEsVc
