import React from 'react'
import {Field, reduxForm} from 'redux-form'
import Checkbox from 'material-ui/Checkbox'
import LockIcon from 'material-ui/svg-icons/action/lock'
import UnlockIcon from 'material-ui/svg-icons/action/lock-open'
import {TextField} from 'redux-form-material-ui'
import SubmitButton from 'components/SubmitButton'
import {register} from 'redux/actions/authActions'

const styles = {
  checkbox: {
    position: 'relative',
    left: '-4px',
    marginTop: '10px'
  }
}

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
        <Checkbox style={styles.checkbox} label={this.state.label} onCheck={this.handleCheck} checkedIcon={<LockIcon/>} uncheckedIcon={<UnlockIcon/>} defaultChecked={true}/>
        <SubmitButton label="Register"/>
      </form>
    )
  }
}

function onSubmit(values, dispatch) {
  return dispatch(register(values))
}
export default Register = reduxForm({form: 'register', onSubmit})(Register)

