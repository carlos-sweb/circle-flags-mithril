import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "ru-ce" circle flag (mithril-lynx). */
const FlagRuCe = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="m96 357 208-32 208 32v155H96l-32-78Z"/><path fill="#496e2d" d="M96 0h416v293l-208 32-208-32-32-147Z"/><path fill="#eee" d="M0 0v512h96V357h416v-64H96V0Z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagRuCe
