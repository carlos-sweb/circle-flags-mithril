import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "et-sn" circle flag (mithril-lynx). */
const FlagEtSn = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z"/><path fill="#0052b4" d="M0 0h512v160H0Z"/><path fill="#d80027" d="M0 352h512v160H0Z"/><path fill="#ff9811" d="m256 188-72 88v48h144v-48l-72-88z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagEtSn
