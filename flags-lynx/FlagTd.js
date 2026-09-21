import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "td" circle flag (mithril-lynx). */
const FlagTd = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"/><path fill="#026" d="M0 0h167v512H0z"/><path fill="#d80027" d="M345 0h167v512H345z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagTd
