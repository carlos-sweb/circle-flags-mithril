import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "ru-ko" circle flag (mithril-lynx). */
const FlagRuKo = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#6da544" d="m0 167 256-32 256 32v178l-256 32L0 345Z"/><path fill="#eee" d="M0 345h512v167H0Z"/><path fill="#0052b4" d="M0 0h512v167H0Z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagRuKo
