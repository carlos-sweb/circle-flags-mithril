import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "id" circle flag (mithril-lynx). */
const FlagId = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 256 249.6-41.3L512 256v256H0z"/><path fill="#d80027" d="M0 0h512v256H0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagId
