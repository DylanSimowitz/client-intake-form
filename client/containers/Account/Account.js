import React,{PropTypes} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import Login from '../Login'
import Register from '../Register'
import {openSnackbar} from 'redux/actions/snackbarActions'
import {authenticate} from 'redux/actions/authActions'

const styles = {
  paper: {
    paddingBottom: 30,
    maxWidth: 500,
    margin: '15px auto'
  },
  form: {
    padding: '0 30px'
  }
}

class Account extends React.Component {
  componentWillMount() {

  }

  handleLoginSubmitSuccess = (result, dispatch) => {
    dispatch(openSnackbar('Login successful'))
    this.context.router.push('/form/questionnaire')
  }
  handleRegisterSubmitSuccess = (result, dispatch) => {
    const email = result
    dispatch(openSnackbar(`Activation link sent to ${email}`))
  }
  handleSubmitFail = (error, dispatch) => {
    if (error._error) {
      dispatch(openSnackbar(error._error))
    }
    else {
      dispatch(openSnackbar('Correct marked fields before trying again'))
    }
  }
  setInitialTab = () => {
    const {router} = this.context
    if (router.isActive('/login')) {
      return 0
    }
    return 1
  }
  render() {
    const {router} = this.context
    return(
      <Paper style={styles.paper}>
      <Tabs initialSelectedIndex={this.setInitialTab()}>
        <Tab label="Login" onActive={() => router.replace('/login')}>
          <div style={styles.form}>
            <Login onSubmitSuccess={this.handleLoginSubmitSuccess} onSubmitFail={this.handleSubmitFail}/>
          </div>
        </Tab>
        <Tab label="Register" onActive={() => router.replace('/register')}>
          <div style={styles.form}>
            <Register onSubmitSuccess={this.handleRegisterSubmitSuccess} onSubmitFail={this.handleSubmitFail}/> 
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
