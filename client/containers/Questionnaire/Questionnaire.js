import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {loadForm} from 'redux/actions/formActions'
import PersonalForm from './PersonalForm'
import EmployerForm from './EmployerForm'
import InsuranceForm from './InsuranceForm'
import AccidentForm from './AccidentForm'
import 'whatwg-fetch'
import {SubmissionError, reduxForm} from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {Stepper, Step, StepButton, StepContent} from 'material-ui/Stepper'
import Paper from 'material-ui/Paper'
import {Grid, Row, Col} from 'react-flexbox-grid'

let styles = {
  paper: {
    padding: 10,
    paddingBottom: 30,
    maxWidth: '1200px',
    margin: '15px auto'
  }
}

class Questionnaire extends React.Component {
  constructor() {
    super()
    this.state = {
      stepIndex: 0
    }
  }
  onSubmit = (data) => {
    let body = new FormData()
    Object.keys(data).forEach(( key ) => {
      if (key === 'accidentPhotos') {
        data[key].map(file => {
          body.append(key, file, file.name)
        })
      } else {
        body.append(key, data[key])
      }
    })
    return new Promise((resolve, reject) => {
      fetch(`/api/users/${this.props.id}/form/questionnaire`, {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem('jwtToken')}`},
        body
      })
        .then(response => {
          return response.json()
        })
        .then(json => {
          if (json._error) {
            reject(new SubmissionError(json))
          }
          else {
            resolve()
          }
        })
    })
  }
  componentWillMount = () => {
    const {loadForm, role} = this.props
    if (role !== 'admin') {
      loadForm('questionnaire', this.props.id)   
    }
  }
  nextStep = () => {
    this.setState({
      stepIndex: this.state.stepIndex + 1
    })
  }
  previousStep = () => {
    this.setState({
      stepIndex: this.state.stepIndex - 1
    })
  }
  renderStepActions(step) {
    const {stepIndex} = this.state
    return (
            <div style={{
              margin: '12px 0'
            }}>
                <RaisedButton label={stepIndex === 3
                    ? 'Finish'
                    : 'Next'} disableTouchRipple={true} type='submit' onSubmit={stepIndex === 3
                    ? this.onSubmit
                    : this.nextStep} disableFocusRipple={true} primary={true} style={{
                      marginRight: 12
                    }}/> {step > 0 && (<FlatButton label="Back" disabled={stepIndex === 0} disableTouchRipple={true} disableFocusRipple={true} onTouchTap={this.previousStep}/>)}
            </div>
        )
  }
  getStepContent(step) {
    const formProps = {initialValues: this.props.formData, enableReinitialize: true, keepDirtyOnReinitialize: true, stepper: this.renderStepActions(step)}

    switch (step) {
    case 0:
      return <PersonalForm onSubmit={this.nextStep} {...formProps} />
    case 1:
      return <EmployerForm onSubmit={this.nextStep} {...formProps} />
    case 2:
      return <InsuranceForm onSubmit={this.nextStep} {...formProps} />
    case 3:
      return <AccidentForm onSubmit={this.onSubmit} {...formProps}/>
    default:

    }
  }
  render() {
    const {stepIndex} = this.state
    return (
            <Paper zDepth={1} style={styles.paper}>
              <Stepper linear={false} activeStep={stepIndex} orientation='vertical'>
                  <Step>
                      <StepButton onClick={() => this.setState({stepIndex: 0})}>
                          Personal information
                      </StepButton>
                      <StepContent>
                          {this.getStepContent(stepIndex)}
                      </StepContent>
                  </Step>
                  <Step>
                      <StepButton onClick={() => this.setState({stepIndex: 1})}>
                          Employer information
                      </StepButton>
                      <StepContent>
                          {this.getStepContent(stepIndex)}
                      </StepContent>
                  </Step>
                  <Step>
                      <StepButton onClick={() => this.setState({stepIndex: 2})}>
                          Insurance information
                      </StepButton>
                      <StepContent>
                          {this.getStepContent(stepIndex)}
                      </StepContent>
                  </Step>
                  <Step>
                      <StepButton onClick={() => this.setState({stepIndex: 3})}>
                          Accident information
                      </StepButton>
                      <StepContent>
                          {this.getStepContent(stepIndex)}
                      </StepContent>
                  </Step>
              </Stepper>
            </Paper>
        )
  }
}
Questionnaire.contextTypes = {
  muiTheme: PropTypes.object.isRequired
}
function mapStateToProps(state) {
  return {
    formData: state.formData,
    id: state.auth.user.id,
    role: state.auth.user.role
  }
}
export default connect(mapStateToProps, {loadForm})(Questionnaire)
