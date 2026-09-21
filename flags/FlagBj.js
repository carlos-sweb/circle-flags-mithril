import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "bj" circle flag. */
const FlagBj = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#6da544" d="M0 0h189.2l54 257.6-54 254.4H0z"/><path fill="#ffda44" d="M189.2 0H512v256l-159 53.5L189.1 256z"/><path fill="#d80027" d="M189.2 256H512v256H189.2z"/></g>`)
    )
  }
}

export default FlagBj
