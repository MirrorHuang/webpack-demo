import React from 'react'
import ReactDom from 'react-dom'
import App from './app'

if (module.hot) {
  module.hot.accept('./app.jsx', function () {
    const App = require("./app.jsx").default;
    ReactDom.render(<App />, document.getElementById('app'))
  })
}
ReactDom.render(<App />, document.getElementById('app'))