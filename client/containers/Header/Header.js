import React, {PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import {withRouter} from 'react-router'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  
  handleToggle = () => this.setState({
    open: !this.state.open
  })

  handleClose = () => this.setState({
    open: false
  })

  render() {
    const {router} = this.props
    return (
    <div>
      <AppBar title="Questionnaire" onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={<FlatButton label="Login" onClick={() => router.push('/login')}/>} zDepth={0}/>
      <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
        <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
      </Drawer>
    </div>
    )
  }
}
Header.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default withRouter(Header)
