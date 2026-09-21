import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "mt" circle flag (mithril-lynx). */
const FlagMt = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 0h256l52 259.2L256 512H0z"/><path fill="#d80027" d="M256 0h256v512H256z"/><path fill="#acabb1" d="M160 128V96h-32v32H96v32h32v32h32v-32h32v-32z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagMt
