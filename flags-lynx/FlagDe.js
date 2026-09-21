import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "de" circle flag (mithril-lynx). */
const FlagDe = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="m0 345 256.7-25.5L512 345v167H0z"/><path fill="#d80027" d="m0 167 255-23 257 23v178H0z"/><path fill="#333" d="M0 0h512v167H0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagDe
