import React, {PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import {logout} from 'redux/actions/authActions'
import {connect} from 'react-redux'
import withRouter from 'react-router/lib/withRouter'
import AdminBar from 'components/AdminBar'

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

  handleClose = () => {
    this.setState({
      open: false
    })
    this.context.router.push('/form/questionnaire')
  }
  
  setAppBarTitle = () => {
    switch (this.props.location.pathname) {
      case '/':
        return 'Home'
      case '/login':
        return 'Login'
      case '/register':
        return 'Register'
      case '/form/questionnaire': 
        return 'Questionnaire'
      default:
        return ''
    }
  }

  renderIconElementRight = () => {
    const {authenticated, router, handleLogoutClick} = this.props
    if (authenticated) {
      return <FlatButton label="Logout" onClick={handleLogoutClick}/>
    }
    return <FlatButton label="Login" onClick={() => router.push('/login')}/> 
  }

  render() {
    const {role} = this.props
    return (
    <div>
      <AppBar title={this.setAppBarTitle()} onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={this.renderIconElementRight()} zDepth={0}/>
      { role === 'admin' && <AdminBar/> }
      <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
        <MenuItem onTouchTap={this.handleClose}>Questionnaire</MenuItem>
      </Drawer>
    </div>
    )
  }
}
Header.contextTypes = {
  router: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    role: state.auth.user.role
  }
}

export default withRouter(connect(mapStateToProps, {handleLogoutClick: logout})(Header))
