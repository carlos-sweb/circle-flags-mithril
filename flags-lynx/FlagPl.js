import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "pl" circle flag (mithril-lynx). */
const FlagPl = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="m0 256 256.4-44.3L512 256v256H0z"/><path fill="#eee" d="M0 0h512v256H0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagPl
