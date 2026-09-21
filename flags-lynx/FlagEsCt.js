import _attrs from '../default_attrs.js'
import { lynxIcon } from '../lynx_svg.js'

/** Mithril component for the "es-ct" circle flag (mithril-lynx). */
const FlagEsCt = lynxIcon(`<mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="M0 0v57l32 29-32 28v57l32 29-32 28v57l32 28-32 28v57l32 29-32 28v57h512v-57l-32-28 32-29v-57l-32-28 32-28v-57l-32-28 32-29v-57l-32-28 32-29V0H0z"/><path fill="#d80027" d="M0 57h512v57H0Zm0 114h512v57H0Zm0 114h512v56H0Zm0 113h512v57H0Z"/></g>`, (size) => ({ ..._attrs(size) }), 512)

export default FlagEsCt
