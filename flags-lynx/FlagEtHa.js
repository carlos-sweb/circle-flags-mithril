import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "et-ha" circle flag (mithril-lynx). */
const FlagEtHa = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 0h512v64l-32 48 32 48v192l-32 48 32 48v64H0v-64l32-48-32-48V160l32-48L0 64Z"/><path fill="#d80027" d="M0 64h512v96H0z"/><path fill="#6da544" d="M0 352h512v96H0z"/><circle cx="256" cy="256" r="72" fill="#338af3"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagEtHa
