import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "cz" circle flag (mithril-lynx). */
const FlagCz = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 0h512v256l-265 45.2z"/><path fill="#d80027" d="M210 256h302v256H0z"/><path fill="#0052b4" d="M0 0v512l256-256L0 0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagCz
