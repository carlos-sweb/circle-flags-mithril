import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "bh" circle flag (mithril-lynx). */
const FlagBh = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 0h182.5l88.1 268.5-88 243.5H0z"/><path fill="#d80027" d="m182.5 0-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6H512V0H182.5z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagBh
