import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {login} from 'redux/actions/authActions'
import {TextField} from 'redux-form-material-ui'
import SubmitButton from 'components/SubmitButton'
import PasswordField from 'components/PasswordField'

class Login extends React.Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}> 
        <Field name="email" component={TextField} floatingLabelText="Email" fullWidth={true}/>
        <PasswordField/>
        <SubmitButton label="Login"/>
      </form>
    )
  }
}

function onSubmit(values, dispatch) {
  return dispatch(login(values))
}

export default Login = reduxForm({form: 'login', onSubmit})(Login)

