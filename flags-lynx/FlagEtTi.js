import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "et-ti" circle flag (mithril-lynx). */
const FlagEtTi = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h512v512H0l64-256Z"/><path fill="#ffda44" d="M0 0v512l256-256Zm404 168v176L300 202l168 54-168 54Z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagEtTi
