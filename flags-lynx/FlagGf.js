import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "gf" circle flag (mithril-lynx). */
const FlagGf = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#6da544" d="m0 0 216.9 301.6L512 512V0z"/><path fill="#ffda44" d="m0 0 512 512H0z"/><path fill="#d80027" d="m256 121 90 270-234-168h288L166 391z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagGf
