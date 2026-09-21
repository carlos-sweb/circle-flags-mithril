import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "us-tx" circle flag (mithril-lynx). */
const FlagUsTx = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#0052b4" d="M0 0h167l64 256-64 256H0Z"/><path fill="#eee" d="m43.5 317 104-75h-128l104 75-40-122zM167 0h345v256l-173 64-172-64Z"/><path fill="#d80027" d="M167 256h345v256H167z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagUsTx
