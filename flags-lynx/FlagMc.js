import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "mc" circle flag (mithril-lynx). */
const FlagMc = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 256 258.2-43.3L512 256v256H0z"/><path fill="#a2001d" d="M0 0h512v256H0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagMc
