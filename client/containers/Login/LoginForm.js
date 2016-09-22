import React, {PropTypes} from 'react'
import {Field, SubmissionError, reduxForm} from 'redux-form'
import {
    Tabs,
    Tab,
    RaisedButton,
    FlatButton,
    Paper,
} from 'material-ui'
import {TextField} from 'redux-form-material-ui'
import SubmitDialog from 'components/SubmitDialog'
import {Grid, Row, Col} from 'react-flexbox-grid'
import {connect} from 'react-redux'
import {openDialog} from 'redux/actions/dialogActions'

class LoginForm extends React.Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}> 
        <Field name="email" component={TextField} floatingLabelText="Email"/>
        <Field name="password" type="password" component={TextField} floatingLabelText="Password"/>
        <RaisedButton type="submit"/>
      </form>
    )
  }
}
function onSubmit(values) {
  console.log(values)
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
  dispatch(openDialog(error._error))
}
function onSubmitSuccess() {
  this.context.router.push('/questionnaire')
}
LoginForm.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
LoginForm = reduxForm({
  form: 'login',
  onSubmit,
  onSubmitSuccess,
  onSubmitFail
})(LoginForm)

export default LoginForm = connect(mapStateToProps)(LoginForm)
