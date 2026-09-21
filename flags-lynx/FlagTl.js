import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "tl" circle flag (mithril-lynx). */
const FlagTl = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="m0 0 214 251.8L0 512l418-256z"/><path fill="#d80027" d="M512 0H0l367.3 256L0 512h512z"/><path fill="#333" d="M0 0v512l256-256z"/><path fill="#eee" d="m71 197.4 39 36.8 47-25.6-23 48.4 39 36.9-53.2-7-23 48.5-9.9-52.7-53.2-7 47.1-25.6z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagTl
