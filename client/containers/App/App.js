import React, {PropTypes} from 'react'
import {AppBar, Drawer, MenuItem} from 'material-ui'
import Questionnaire from '../Questionnaire'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from './theme'
import { Provider } from 'react-redux'

require('normalize-css')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  handleToggle = () => this.setState({
    open: !this.state.open
  });

  render() {
    return (
          <Provider store={this.props.store}>
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
                <div>
                    <AppBar title="Form" onLeftIconButtonTouchTap={this.handleToggle} iconClassNameRight="muidocs-icon-navigation-expand-more" zDepth={0}/>
                    <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                    </Drawer>
                    <Questionnaire/>
                </div>

            </MuiThemeProvider>
          </Provider>
        )
  }
}
App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default App
