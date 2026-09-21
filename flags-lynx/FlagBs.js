import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "bs" circle flag (mithril-lynx). */
const FlagBs = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#338af3" d="M0 0h512v167l-37.4 89 37.4 89v167H0l49.6-252z"/><path fill="#ffda44" d="M108.3 167H512v178H108.3z"/><path fill="#333" d="M0 0v512l256-256L0 0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagBs
