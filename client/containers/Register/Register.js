import React from 'react'
import {Field, reduxForm} from 'redux-form'
import Checkbox from 'material-ui/Checkbox'
import {TextField} from 'redux-form-material-ui'
import SubmitButton from 'components/SubmitButton'
import PasswordField from 'components/PasswordField'
import {register} from 'redux/actions/authActions'


class Register extends React.Component {
  constructor() {
    super()
  }
  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}> 
        <Field name="first_name" component={TextField} floatingLabelText="First Name" fullWidth={true}/>
        <Field name="last_name" component={TextField} floatingLabelText="Last Name" fullWidth={true}/>
        <Field name="email" component={TextField} floatingLabelText="Email" fullWidth={true}/>
        <PasswordField/>
        <SubmitButton label="Register"/>
      </form>
    )
  }
}

function onSubmit(values, dispatch) {
  return dispatch(register(values))
}
export default Register = reduxForm({form: 'register', onSubmit})(Register)

