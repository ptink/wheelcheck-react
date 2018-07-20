import React from "react"
import ReactDOM from "react-dom"

import Debug from 'debug'

import AppRoot from './components/AppRoot'


let debug = Debug('myApp')


class App {
  constructor(options) {
    debug('create app with options', options)
    this.state = options.state
  }

   /*
   * @method render
   * @param {DOM} [element]
   */
  render(element) {
    debug('render app with state', this.state);

    // would be in JSX: <AppRoot state={this.state} />
    let appRootElement = React.createElement(AppRoot, {
      state: this.state
    })

    if(!element) {
      return debug(new Error('App.renderToDOM: element is required'))
    }

    ReactDOM.render(appRootElement, element)
  }
}

export default App
