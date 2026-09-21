import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "st" circle flag. */
const FlagSt = {
  view: (vnode) => {
    const { size, ...rest } = vnode.attrs || {}
    return m(
      'svg',
      { ..._attrs(size), ...rest },
      m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#6da544" d="M0 0h512v167l-52.6 83.8L512 345v167H0l72-264.3z"/><path fill="#ffda44" d="M114.9 166.9H512v178H114.9z"/><path fill="#d80027" d="M0 0v512l256-256z"/><path fill="#333" d="m325 211.5 11.1 34H372l-29 21 11.1 34-29-21-28.9 21 11-34-28.8-21H314zm111.4 0 11 34h35.8l-29 21 11.1 34-29-21-28.9 21 11.1-34-29-21h35.8z"/></g>`)
    )
  }
}

export default FlagSt
