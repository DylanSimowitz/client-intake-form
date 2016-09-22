import React, {PropTypes} from 'react'
import Routes from 'routes'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from './theme'
import { Provider } from 'react-redux'

require('normalize-css')

class App extends React.Component {
  render() {
    return (
      
          <Provider store={this.props.store}>
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
              <Routes/>
            </MuiThemeProvider>
          </Provider>
        )
  }
}
App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default App
