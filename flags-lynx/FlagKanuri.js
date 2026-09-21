import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "kanuri" circle flag (mithril-lynx). */
const FlagKanuri = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="m0 167 256-32 256 32v178l-256 32L0 345Z"/><path fill="#496e2d" d="M0 345h512v167H0Z"/><path fill="#0052b4" d="M0 0h512v167H0Z"/><path fill="#ffda44" d="m373 373 36 112-94-69h117l-95 69z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagKanuri
