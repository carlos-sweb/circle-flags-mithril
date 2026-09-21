import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "bg" circle flag (mithril-lynx). */
const FlagBg = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#496e2d" d="m0 166.9 258-31.7 254 31.7v178l-251.4 41.3L0 344.9z"/><path fill="#eee" d="M0 0h512v166.9H0z"/><path fill="#d80027" d="M0 344.9h512V512H0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagBg
