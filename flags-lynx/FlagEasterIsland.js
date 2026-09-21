import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "easter_island" circle flag (mithril-lynx). */
const FlagEasterIsland = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="M0 0h512v512H0z"/><path fill="#d80027" d="M334 211.5v22.2h30.5a134.2 134.2 0 0 1-49.5 42 27.7 27.7 0 0 0-47.2 13.2 134.8 134.8 0 0 1-23.6 0 27.8 27.8 0 0 0-47.2-13.2 134.2 134.2 0 0 1-49.5-42h30.6v-22.2h-78a155.8 155.8 0 0 0 311.7 0H334z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagEasterIsland
