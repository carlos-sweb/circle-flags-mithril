import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "gw" circle flag (mithril-lynx). */
const FlagGw = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h189.2l54 257.6-54 254.4H0z"/><path fill="#ffda44" d="M189.2 0H512v256l-159 53.5L189.1 256z"/><path fill="#6da544" d="M189.2 256H512v256H189.2z"/><path fill="#333" d="m96.7 189.2 16.6 51H167l-43.4 31.6 16.5 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6h53.7z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagGw
