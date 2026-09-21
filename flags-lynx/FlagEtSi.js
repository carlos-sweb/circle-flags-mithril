import _attrs from '../default_attrs.js'
import m from 'mithril-runtime'

/** Mithril component for the "et-si" circle flag (mithril-lynx). */
const FlagEtSi = {
  view: (vnode) => m(
    'svg',
    { ..._attrs(vnode.attrs?.size), ...(vnode.attrs || {}), content: `<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#496e2d" d="M0 0h512v149H0Z"/><path fill="#eee" d="M0 149h512v32H0z"/><path fill="#d80027" d="M0 363h512v149H0Z"/><path fill="#eee" d="M0 331h512v32H0z"/><path fill="#0052b4" d="M0 181h512v150H0Z"/><path fill="#eee" d="m312 317 104-75H288l104 75-40-122zm-203-32 49-36H98l49 36-19-58zm64 32 49-36h-60l49 36-19-58Zm0-64 49-36h-60l49 36-19-58Z"/></g>` }
  )
}

export default FlagEtSi
