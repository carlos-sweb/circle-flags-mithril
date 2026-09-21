import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "it-72" circle flag (mithril-lynx). */
const FlagIt72 = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#0052b4" d="M0 0h512v512H0V0Z"/><path fill="#eee" d="m176 152-32 32v109c0 85.6 112 111.4 112 111.4s40.6-9.3 73-35.5l29.2-34.7A88.6 88.6 0 0 0 368 293V152H176Z"/><path fill="#d80027" d="M358.2 334.2 176 152h-32v32l185 185a110 110 0 0 0 29.2-34.8Z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagIt72
