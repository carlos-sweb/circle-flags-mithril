import _attrs from '../default_attrs.js'
import m from 'mithril'

/** Mithril component for the "et-am" circle flag. */
const FlagEtAm = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}) },
    m.trust(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="M0 0h192l160 64L512 0v512H320l-160-64L0 512Z"/><path fill="#d80027" d="M0 512 192 0h320L320 512Z"/><path fill="#ffda44" d="m176 378 208-150H128l208 150-80-244Z"/></g>`)
  )
}

export default FlagEtAm
