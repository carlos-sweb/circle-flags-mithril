import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "bh" circle flag (mithril-lynx). */
const FlagBh = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 0h182.5l88.1 268.5-88 243.5H0z"/><path fill="#d80027" d="m182.5 0-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6H512V0H182.5z"/></g>` }
  )
}

export default FlagBh
