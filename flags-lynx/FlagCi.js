import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "ci" circle flag (mithril-lynx). */
const FlagCi = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M167 0h178l31 253.2L345 512H167l-33.4-257.4z"/><path fill="#ff9811" d="M0 0h167v512H0z"/><path fill="#6da544" d="M345 0h167v512H345z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagCi
