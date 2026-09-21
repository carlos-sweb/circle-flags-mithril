import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "gh" circle flag (mithril-lynx). */
const FlagGh = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="m0 167 256-32 256 32v178l-256 32L0 345Z"/><path fill="#d80027" d="M0 0h512v167H0Z"/><path fill="#496e2d" d="M0 345h512v167H0Z"/><path fill="#333" d="m198 345 151-109H163l151 109-58-178Z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagGh
