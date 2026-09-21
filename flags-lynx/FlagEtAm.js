import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "et-am" circle flag (mithril-lynx). */
const FlagEtAm = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="M0 0h192l160 64L512 0v512H320l-160-64L0 512Z"/><path fill="#d80027" d="M0 512 192 0h320L320 512Z"/><path fill="#ffda44" d="m176 378 208-150H128l208 150-80-244Z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagEtAm
