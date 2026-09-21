import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "at" circle flag (mithril-lynx). */
const FlagAt = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h512v167l-23.2 89.7L512 345v167H0V345l29.4-89L0 167z"/><path fill="#eee" d="M0 167h512v178H0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagAt
