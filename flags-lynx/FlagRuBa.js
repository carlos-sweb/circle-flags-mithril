import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "ru-ba" circle flag (mithril-lynx). */
const FlagRuBa = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z"/><path fill="#338af3" d="M0 0h512v160H0Z"/><path fill="#496e2d" d="M0 352h512v160H0Z"/><circle cx="256" cy="256" r="64" fill="#ffda44"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagRuBa
