import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "ua" circle flag (mithril-lynx). */
const FlagUa = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="m0 256 258-39.4L512 256v256H0z"/><path fill="#338af3" d="M0 0h512v256H0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagUa
