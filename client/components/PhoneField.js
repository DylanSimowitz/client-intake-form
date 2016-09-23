import React from 'react'
import TextField from 'material-ui/TextField'
import Validator from '../validators'
var validator = new Validator()

const invalidPhoneError = 'Invalid phone number'
const fieldRequiredError = 'This field is required'

class PhoneField extends TextField {
  constructor() {
    super()


    this.state = {
      errorText: '',
      value: ''
    }
  }
  componentWillMount() {
    if (this.props.required) {
      this.setState({
        errorText: fieldRequiredError
      })
    }
  }
  handleChange(event) {
    if (validator.validate('phone',event.target.value)) {
      this.setState({
        value: event.target.value,
        errorText: ''
      })
    }
    else {
      this.setState({
        value: event.target.value,
        errorText: invalidPhoneError
      })
    }
  }
  handleBlur(event) {
    if (this.props.required === true) {
      if (event.target.value === '') {
        this.setState({
          errorText: fieldRequiredError
        })
      }
    }
    else {
      if (event.target.value === '') {
        this.setState({
          errorText: ''
        })
      }
    }
  }
  render() {
    return(
      <TextField
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        value={this.state.value}
        errorText={this.state.errorText}
        floatingLabelText={this.props.floatingLabelText || 'Phone Number'}
      />
    )
  }
}


module.exports = PhoneField
