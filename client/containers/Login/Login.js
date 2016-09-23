import React, {PropTypes} from 'react'
import {Field, SubmissionError, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {openSnackbar} from 'redux/actions/snackbarActions'
import {TextField} from 'redux-form-material-ui'
import SubmitButton from 'components/SubmitButton'

class Login extends React.Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}> 
        <Field name="email" component={TextField} floatingLabelText="Email" fullWidth={true}/>
        <Field name="password" type="password" component={TextField} floatingLabelText="Password" fullWidth={true}/>
        <SubmitButton label="Login"/>
      </form>
    )
  }
}

function onSubmit(values) {
  return new Promise((resolve, reject) => {
    fetch('/auth', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => response.json())
      .then(json => {
        const {token, _error} = json
        if (json.token) {
          localStorage.setItem('jwtToken', token)
          resolve()
        }
        else {
          reject(new SubmissionError({_error}))
        }
      })
  })
}
function onSubmitFail(error, dispatch) {
  dispatch(openSnackbar(error._error))
}
Login.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
Login = reduxForm({
  form: 'login',
  onSubmit,
  onSubmitFail
})(Login)

export default Login = connect(mapStateToProps)(Login)
