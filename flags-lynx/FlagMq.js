import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "mq" circle flag (mithril-lynx). */
const FlagMq = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#6da544" d="M0 0h512v256l-256 44Z"/><path fill="#333" d="M210 256h302v256H0z"/><path fill="#d80027" d="M0 0v512l256-256L0 0z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagMq
