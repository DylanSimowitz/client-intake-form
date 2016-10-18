import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import {AppContainer} from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import configureStore from './redux/store'
import initialState from 'redux/store/state'
import {authenticate} from 'redux/actions/authActions'
import 'babel-polyfill'
import 'whatwg-fetch'

const store = configureStore(initialState)

const rootElement = document.getElementById('app')

if (localStorage.jwtToken) {
  store.dispatch(authenticate(localStorage.jwtToken))
}

ReactDOM.render(
  <AppContainer>
    <App store={store}/>
  </AppContainer>,
  rootElement
  )

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default
    ReactDOM.render(
        <AppContainer>
          <NextApp/>
        </AppContainer>,
        rootElement
      )
  })
}
