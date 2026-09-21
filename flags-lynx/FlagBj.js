import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "bj" circle flag (mithril-lynx). */
const FlagBj = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#6da544" d="M0 0h189.2l54 257.6-54 254.4H0z"/><path fill="#ffda44" d="M189.2 0H512v256l-159 53.5L189.1 256z"/><path fill="#d80027" d="M189.2 256H512v256H189.2z"/></g>` }
  )
}

export default FlagBj
