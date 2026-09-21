import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "it-23" circle flag (mithril-lynx). */
const FlagIt23 = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#333" d="M0 0h256l64 256-64 256H0V0Z"/><path fill="#d80027" d="M256 0h256v512H256V0Z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagIt23
