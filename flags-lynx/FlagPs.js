import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "ps" circle flag (mithril-lynx). */
const FlagPs = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M41.3 121.9 512 167v178L43.8 391.3z"/><path fill="#333" d="M0 0h512v167H111z"/><path fill="#6da544" d="M111 345h401v167H0z"/><path fill="#d80027" d="M0 0v512l256-256z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagPs
