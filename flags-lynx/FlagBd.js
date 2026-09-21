import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "bd" circle flag (mithril-lynx). */
const FlagBd = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#496e2d" d="M0 0h512v512H0z"/><circle cx="200.3" cy="256" r="111.3" fill="#d80027"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagBd
