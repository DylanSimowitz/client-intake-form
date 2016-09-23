import React, {PropTypes} from 'react'
import {Field, SubmissionError, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {openSnackbar} from 'redux/actions/snackbarActions'
import Checkbox from 'material-ui/Checkbox'
import LockIcon from 'material-ui/svg-icons/action/lock'
import UnlockIcon from 'material-ui/svg-icons/action/lock-open'
import {TextField} from 'redux-form-material-ui'
import SubmitButton from 'components/SubmitButton'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      masked: 'password',
      label: 'Show password'
    }
  }
  handleCheck = (event, isInputChecked) => {
    if (isInputChecked) {
      this.setState({
        masked: 'password',
        label: 'Show password'
      })
    }
    else {
      this.setState({
        masked: 'text',
        label: 'Hide password'
      })
    }
  }
  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}> 
        <Field name="email" component={TextField} floatingLabelText="Email" fullWidth={true}/>
        <Field name="password" type={this.state.masked} component={TextField} floatingLabelText="Password" fullWidth={true}/>
        <Checkbox style={{position: 'relative', left: '-4px'}} label={this.state.label} onCheck={this.handleCheck} checkedIcon={<LockIcon/>} uncheckedIcon={<UnlockIcon/>} defaultChecked={true}/>
        <SubmitButton label="Register"/>
      </form>
    )
  }
}

function onSubmit(values) {
  return new Promise((resolve, reject) => {
    fetch('/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => response.json())
      .then(json => {
        const {token} = json
        if (json.token) {
          localStorage.setItem('jwtToken', token)
          resolve()
        }
        else {
          reject(new SubmissionError(json))
        }
      })
  })
}
function onSubmitFail(error, dispatch) {
  dispatch(openSnackbar(error._error))
}
Register.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
Register = reduxForm({
  form: 'register',
  onSubmit,
  onSubmitFail
})(Register)

export default Register = connect(mapStateToProps)(Register)
