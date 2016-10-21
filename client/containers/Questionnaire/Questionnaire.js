import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {loadForm, submitForm} from 'redux/actions/formActions'
import PersonalForm from './PersonalForm'
import EmployerForm from './EmployerForm'
import InsuranceForm from './InsuranceForm'
import MedicalForm from './MedicalForm'
import DefendantForm from './DefendantForm'
import AccidentForm from './AccidentForm'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {Stepper, Step, StepButton, StepContent} from 'material-ui/Stepper'
import Paper from 'material-ui/Paper'
import {Row, Col} from 'react-flexbox-grid'
import {openSnackbar} from 'redux/actions/snackbarActions'
import {clientValidation} from 'shared/validate'

function onSubmitFail(error, dispatch) {
  if (error) {
    dispatch(openSnackbar(error._error))
  }
  else {
    dispatch(openSnackbar('Fix all invalid fields before submitting'))
  }
}
function onSubmitSuccess(result, dispatch) {
  dispatch(openSnackbar('Your submission was successfully received'))
}

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
  handleSubmit = (data) => {
    const {submitForm, user, admin} = this.props
    if (user.role === 'admin') {
      return submitForm('questionnaire', admin.selectedClient, data)
    }
    else {
      return submitForm('questionnaire', user.id, data)
    }
  }
  componentWillMount = () => {
    const {openSnackbar, loadForm, user, admin} = this.props
    if (user.role !== 'admin') {
      loadForm('questionnaire', user.id) 
    }

    if (user.role === 'admin' && admin.selectedClient === '') {
      openSnackbar('Select a client to begin')
    }

    if (admin.selectedClient !== '') {
      loadForm('questionnaire', admin.selectedClient)
    }
  }
  showDatePickerTip = () => {
    this.props.openSnackbar('Click the year in the corner to select the year')
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
    const {admin, user} = this.props
    const finalStep = this.steps.length - 1
    return (
            <div style={{margin: '12px 0'}}>
              <RaisedButton 
                label={stepIndex === finalStep ? 'Finish':'Next'}
                disableTouchRipple={true} 
                type='submit' 
                onSubmit={stepIndex === finalStep ? this.onSubmit : this.nextStep}
                disableFocusRipple={true}
                primary={true} 
                style={{marginRight: 12}}
                disabled={user.role === 'admin' && admin.selectedClient === ''}
              />
              {step > 0 && (<FlatButton label="Back" disabled={stepIndex === 0} disableTouchRipple={true} disableFocusRipple={true} onTouchTap={this.previousStep}/>)}
            </div>
        )
  }
  handleValidate = (values) => {
    return clientValidation(values, 'questionnaire')
  }
  getStepContent(step) {
    let formProps = {
      onSubmit: this.nextStep,
      validate: this.handleValidate,
      showDatePickerTip: this.showDatePickerTip,
      //initialValues: this.props.formData,
      //enableReinitialize: true,
      stepper: this.renderStepActions(step)
    }

    switch (step) {
    case 0:
      return <PersonalForm {...formProps} />
    case 1:
      return <EmployerForm {...formProps} />
    case 2:
      return <InsuranceForm {...formProps} />
    case 3:
      return <MedicalForm {...formProps} />
    case 4:
      return <AccidentForm {...formProps}/>
    case 5:
      formProps.onSubmit = this.handleSubmit
      formProps.onSubmitFail = onSubmitFail
      formProps.onSubmitSuccess = onSubmitSuccess
      return <DefendantForm {...formProps} />
    default:
      return <div></div>
    }
  }
  steps = [
    'Personal',
    'Employment',
    'Insurance',
    'Medical',
    'Accident',
    'Defendant'
  ]
  handleStepClick = (index) => {
    this.setState({
      stepIndex: index
    })
  }
  render() {
    const {stepIndex} = this.state
    const {user, admin, openSnackbar, formData} = this.props
    if (user.role === 'admin' && admin.selectedClient === '') {
      return <div></div>
    }
    return (
            <Paper zDepth={1} style={styles.paper}>
              <Stepper linear={user.role !== 'admin'} activeStep={stepIndex} orientation='vertical'>
                {this.steps.map((step, index) => {
                  return (
                    <Step key={index}>
                        <StepButton onClick={() => this.handleStepClick(index)}>
                          {step} 
                        </StepButton>
                        <StepContent>
                          {this.getStepContent(stepIndex)}
                        </StepContent>
                    </Step>
                  )
                })}
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
    user: state.auth.user,
    admin: state.admin
  }
}
export default connect(mapStateToProps, {loadForm, submitForm, openSnackbar})(Questionnaire)
