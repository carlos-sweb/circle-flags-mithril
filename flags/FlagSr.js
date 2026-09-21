import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "sr" circle flag. */
const FlagSr = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#6da544" d="M0 0h512v111.3l-85.3 143.1L512 400.7V512H0V400.7l87-149L0 111.3z"/><path fill="#eee" d="M0 111.3h512V167l-41 84.7 41 93.3v55.7H0V345l44.2-86.6L0 167z"/><path fill="#a2001d" d="M0 167h512v178H0z"/><path fill="#ffda44" d="m256 167 22.1 68h71.5l-57.8 42 22 68-57.8-42-57.9 42 22.1-68-57.8-42h71.5z"/></g>`)
    )
  }
}

export default FlagSr
