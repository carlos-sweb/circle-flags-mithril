import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "vc" circle flag (mithril-lynx). */
const FlagVc = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="M378.5 0H133.7l-22.3 256 22.3 256h244.8l22.3-256z"/><path fill="#338af3" d="M133.7 512V0H0v512z"/><path fill="#6da544" d="M512 0H378.5v512H512zM200.4 322.8 156 256l44.5-66.8 44.7 66.8zm111.4 0L267.1 256l44.6-66.8 44.5 66.8zm-55.7 89L211.6 345l44.5-66.7 44.5 66.7z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagVc
