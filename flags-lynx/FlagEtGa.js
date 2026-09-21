import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "et-ga" circle flag (mithril-lynx). */
const FlagEtGa = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h512v128l-256 64L0 128Z"/><path fill="#eee" d="M0 128h512v128l-256 64L0 256Z"/><path fill="#496e2d" d="M0 256h512v128l-256 64L0 384Z"/><path fill="#333" d="M0 384h512v128H0Zm221-139 91-65H200l91 65-35-106z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagEtGa
