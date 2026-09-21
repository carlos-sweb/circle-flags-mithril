import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "ru" circle flag (mithril-lynx). */
const FlagRu = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z"/><path fill="#eee" d="M512 0v170H0V0Z"/><path fill="#d80027" d="M512 342v170H0V342Z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagRu
