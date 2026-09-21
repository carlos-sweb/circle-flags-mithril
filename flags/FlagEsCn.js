import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "es-cn" circle flag. */
const FlagEsCn = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#338af3" d="M167 0h178l32.3 257L345 512H167l-25.3-256z"/><path fill="#eee" d="M0 0h166.9v512H0z"/><path fill="#ffda44" d="M344.9 0H512v512H344.9z"/></g>`)
    )
  }
}

export default FlagEsCn
