import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "vn" circle flag (mithril-lynx). */
const FlagVn = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#d80027" d="M0 0h512v512H0Z"/><path fill="#ffda44" d="m176 378 208-150H128l208 150-80-244Z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagVn
