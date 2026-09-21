import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "pe" circle flag (mithril-lynx). */
const FlagPe = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h167l86 41.2L345 0h167v512H345l-87.9-41.4L167 512H0z"/><path fill="#eee" d="M167 0h178v512H167z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagPe
