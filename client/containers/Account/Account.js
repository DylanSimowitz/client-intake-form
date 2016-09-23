import React,{PropTypes} from 'react'
import {Tabs, Tab, Paper} from 'material-ui'
import Login from '../Login'
import Register from '../Register'
import {openSnackbar} from 'redux/actions/snackbarActions'

const styles = {
  paper: {
    paddingBottom: 30,
    maxWidth: 500,
    margin: '15px auto'
  },
  form: {
    padding: '0 10px'
  }
}

class Account extends React.Component {
  handleLoginSubmitSuccess = (result, dispatch) => {
    dispatch(openSnackbar('Login successful'))
    this.context.router.push('/questionnaire')
  }
  handleRegisterSubmitSuccess = (result, dispatch) => {
    dispatch(openSnackbar('Account creation successful'))
    this.context.router.push('/questionnaire')
  }
  render() {
    return(
      <Paper style={styles.paper}>
      <Tabs>
        <Tab label="Login">
          <div style={styles.form}>
            <Login onSubmitSuccess={this.handleLoginSubmitSuccess} />
          </div>
        </Tab>
        <Tab label="Register">
          <div style={styles.form}>
            <Register onSubmitSuccess={this.handleRegisterSubmitSuccess} /> 
          </div> 
        </Tab>
      </Tabs>
    </Paper>
    )
  }
}

Account.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Account
