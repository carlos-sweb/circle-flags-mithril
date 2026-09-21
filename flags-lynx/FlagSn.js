import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "sn" circle flag (mithril-lynx). */
const FlagSn = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest, content: `<defs><clipPath id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></clipPath></defs><g clip-path="url(#a)"><path fill="#ffda44" d="M144.8 0h222.4l32 260-32 252H144.8l-32.1-256z"/><path fill="#496e2d" d="M0 0h144.8v512H0z"/><path fill="#d80027" d="M367.2 0H512v512H367.2z"/><path fill="#496e2d" d="m256.1 167 22.1 68h71.5L292 277l22 68-57.8-42-57.9 42 22.1-68-57.8-42H234z"/></g>` }
    )
  }
}

export default FlagSn
