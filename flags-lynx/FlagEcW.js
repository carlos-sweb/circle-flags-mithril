import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "ec-w" circle flag (mithril-lynx). */
const FlagEcW = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 167 254.6-36.6L512 166.9v178l-254.6 36.4L0 344.9z"/><path fill="#6da544" d="M0 0h512v166.9H0z"/><path fill="#0052b4" d="M0 344.9h512V512H0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagEcW
