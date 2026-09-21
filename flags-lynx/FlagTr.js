import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "tr" circle flag (mithril-lynx). */
const FlagTr = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h512v512H0z"/><path fill="#eee" d="M208 115a141 141 0 1 0 106 242q-25 13-54 13a114 114 0 1 1 54-215 141 141 0 0 0-106-40m142 67v56l-54 18 54 17v57l33-46 54 18-33-46 33-46-54 18z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagTr
