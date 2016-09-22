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
import ReduxSnackbar from 'components/ReduxSnackbar'
import {openSnackbar} from 'redux/actions/snackbarActions'
import {Grid, Row, Col} from 'react-flexbox-grid'
import {connect} from 'react-redux'

class Login extends React.Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}> 
        <Field name="email" component={TextField} floatingLabelText="Email"/>
        <Field name="password" type="password" component={TextField} floatingLabelText="Password"/>
        <RaisedButton type="submit" label="Submit"/>
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
function onSubmitSuccess() {
  this.context.router.push('/questionnaire')
}
Login.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
Login = reduxForm({
  form: 'login',
  onSubmit,
  onSubmitSuccess,
  onSubmitFail
})(Login)

export default Login = connect(mapStateToProps)(Login)
