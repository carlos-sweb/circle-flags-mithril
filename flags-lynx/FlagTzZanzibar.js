import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "tz-zanzibar" circle flag (mithril-lynx). */
const FlagTzZanzibar = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#338af3" d="M512 0v170H0V0z"/><path fill="#ffda44" d="M200 0 0 132v38h56L256 38V0z"/><path fill="#333" d="M512 170v172H0V170zM222 0 0 148v22h34L256 22V0z"/><path fill="#6da544" d="M512 342v170H0V342zM0 132V0h200z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagTzZanzibar
