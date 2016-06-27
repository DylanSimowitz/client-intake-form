import React, {PropTypes} from 'react';
import PersonalForm from './PersonalForm'
import EmployerForm from './EmployerForm'
import InsuranceForm from './InsuranceForm'
import AccidentForm from './AccidentForm'
import {
    Tabs,
    Tab,
    TextField,
    DatePicker,
    RaisedButton,
    FlatButton,
    Stepper,
    Step,
    StepLabel,
    StepButton,
    StepContent,
    Paper
} from 'material-ui';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {connect} from 'react-redux'

let styles = {
    paper: {
        padding: 10,
        maxWidth: '1200px',
        margin: '15px auto'
    }
}

class Questionnaire extends React.Component {
    constructor() {
        super();
        this.state = {
            stepIndex: 0,
            windowWidth: window.innerWidth
        }
    }
    handleResize = (e) => {
        this.setState({windowWidth: window.innerWidth})
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
    handleSubmit = (data) => {
        fetch('/client', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
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
        const {stepIndex} = this.state;

        return (
            <div style={{
                margin: '12px 0'
            }}>
                <RaisedButton label={stepIndex === 3
                    ? 'Finish'
                    : 'Next'} disableTouchRipple={true} type='submit' onSubmit={stepIndex === 3
                    ? this.handleSubmit
                    : this.nextStep} disableFocusRipple={true} primary={true} style={{
                    marginRight: 12
                }}/> {step > 0 && (<FlatButton label="Back" disabled={stepIndex === 0} disableTouchRipple={true} disableFocusRipple={true} onTouchTap={this.previousStep}/>)}
            </div>
        );
    }
    getStepContent(step) {
        const {stepIndex} = this.state;

        switch (step) {
            case 0:
                return <PersonalForm onSubmit={this.nextStep} stepper={this.renderStepActions(step)}/>
            case 1:
                return <EmployerForm onSubmit={this.nextStep} stepper={this.renderStepActions(step)}/>
            case 2:
                return <InsuranceForm onSubmit={this.nextStep} stepper={this.renderStepActions(step)}/>
            case 3:
                return <AccidentForm onSubmit={this.handleSubmit} stepper={this.renderStepActions(step)}/>
            default:

        }
    }
    render() {
        const {stepIndex, windowWidth} = this.state
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
    return {questionnaire: state.form.questionnaire}
}

export default connect(mapStateToProps)(Questionnaire)
