import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import {AppContainer} from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import configureStore from './redux/store'
const store = configureStore({
  dialog: {
    open: false,
    message: ''
  },
  snackbar: {
    open: false,
    message: ''
  },
  auth: false
})

const rootElement = document.getElementById('app')

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
