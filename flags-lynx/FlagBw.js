import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "bw" circle flag (mithril-lynx). */
const FlagBw = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#338af3" d="M0 0h512v178l-31 76.9 31 79.1v178H0V334l37-80.7L0 178z"/><path fill="#333" d="m0 211.5 256-19.2 256 19.2v89l-254.6 20.7L0 300.5z"/><path fill="#eee" d="M0 178h512v33.5H0zm0 122.5h512V334H0z"/></g>` }
  )
}

export default FlagBw
