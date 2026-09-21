import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "tz" circle flag (mithril-lynx). */
const FlagTz = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="M399 0 0 399v45l68 68h45l399-399V68L444 0z"/><path fill="#333" d="M444 0 0 444v68h68L512 68V0z"/><path fill="#338af3" d="m113 512 399-399v399z"/><path fill="#6da544" d="M0 399V0h399z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagTz
