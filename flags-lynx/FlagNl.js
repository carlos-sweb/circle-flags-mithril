import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "nl" circle flag (mithril-lynx). */
const FlagNl = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"/><path fill="#a2001d" d="M0 0h512v167H0z"/><path fill="#0052b4" d="M0 345h512v167H0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagNl
