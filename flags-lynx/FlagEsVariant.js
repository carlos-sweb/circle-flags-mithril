import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "es-variant" circle flag (mithril-lynx). */
const FlagEsVariant = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h512v128l-39.8 130.3L512 384v128H0V384l37.8-124L0 128z"/><path fill="#ffda44" d="M0 128h512v256H0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagEsVariant
