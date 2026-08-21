import m from 'mithril'
import { FlagCl } from './../index.js'

const App = {
  view: () => m(FlagCl, { size: 128 })
}

m.mount(document.getElementById('app'), App)
