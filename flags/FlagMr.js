import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "mr" circle flag. */
const FlagMr = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h512v128l-32 128 32 128v128H0V384l32-128L0 128Z"/><path fill="#6da544" d="M0 128h512v256H0Z"/><path fill="#ffda44" d="m256 178-8 26h-27l22 15-9 26 22-16 22 16-9-26 22-15h-27zm-87 48-2 19a89 89 0 0 0 178 0l-2-19a89 89 0 0 1-87 70 89 89 0 0 1-87-70"/></g>`)
    )
  }
}

export default FlagMr
