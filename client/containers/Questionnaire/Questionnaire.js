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
    StepContent
} from 'material-ui';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {connect} from 'react-redux'

let styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto'
    }
}

class Questionnaire extends React.Component {
    constructor() {
        super();
        this.state = {
            stepIndex: 0
        }
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
    handleTabChange = (page) => {
        console.log(page);
        this.setState({page})
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
                    : 'Next'} disableTouchRipple={true} type='submit' onSubmit={stepIndex === 3 ? this.handleSubmit : this.nextStep} disableFocusRipple={true} primary={true} style={{
                    marginRight: 12
                }}/> {step > 0 && (<FlatButton label="Back" disabled={stepIndex === 0} disableTouchRipple={true} disableFocusRipple={true} onTouchTap={this.previousStep}/>)}
            </div>
        );
    }
    render() {
        const {stepIndex} = this.state
        return (
            <Stepper linear={false} activeStep={stepIndex} orientation="vertical" style={styles.container}>
                <Step>
                    <StepButton onClick={() => this.setState({stepIndex: 0})}>
                        Personal information
                    </StepButton>
                    <StepContent>
                        <PersonalForm onSubmit={this.nextStep} stepper={this.renderStepActions(0)}/>
                    </StepContent>
                </Step>
                <Step>
                    <StepButton onClick={() => this.setState({stepIndex: 1})}>
                        Employer information
                    </StepButton>
                    <StepContent>
                        <EmployerForm onSubmit={this.nextStep} stepper={this.renderStepActions(1)}/>
                    </StepContent>
                </Step>
                <Step>
                    <StepButton onClick={() => this.setState({stepIndex: 2})}>
                        Insurance information
                    </StepButton>
                    <StepContent>
                        <InsuranceForm onSubmit={this.nextStep} stepper={this.renderStepActions(2)}/>
                    </StepContent>
                </Step>
                <Step>
                    <StepButton onClick={() => this.setState({stepIndex: 3})}>
                        Accident information
                    </StepButton>
                    <StepContent>
                        <AccidentForm onSubmit={this.handleSubmit} stepper={this.renderStepActions(3)}/>
                    </StepContent>
                </Step>
            </Stepper>
        //   <Stepper activeStep={this.state.stepIndex} orientation="vertical" linear={false }>
        //   <Step>
        //   <StepButton onClick={() => this.setState({stepIndex: 0})}>
        //     <StepLabel>Personal information</StepLabel>
        //   </StepButton>
        //
        //     <StepContent>
        //       <PersonalForm onSubmit={this.nextPage}/>
        //       {this.renderStepActions(0)}
        //     </StepContent>
        //   </Step>
        //   <Step>
        //     <StepLabel>Employer information</StepLabel>
        //     <StepContent>
        //       <InsuranceForm onSubmit={this.nextPage} previousPage={this.previousPage}/>
        //       {this.renderStepActions(1)}
        //     </StepContent>
        //   </Step>
        //   <Step>
        //     <StepLabel>Create an ad</StepLabel>
        //     <StepContent>
        //       <InsuranceForm onSubmit={this.nextPage} previousPage={this.previousPage}/>
        //       {this.renderStepActions(2)}
        //     </StepContent>
        //   </Step>
        // </Stepper>
        // <Tabs value={this.state.page} onChange={this.handleTabChange}>
        //     <Tab label="Personal" value={1}>
        //       <PersonalForm onSubmit={this.nextPage}/>
        //     </Tab>
        //     <Tab label="Employer" value={2}>
        //       <EmployerForm onSubmit={this.nextPage} previousPage={this.previousPage}/>
        //     </Tab>
        //     <Tab label="Insurance" value={3}>
        //       <InsuranceForm onSubmit={this.nextPage} previousPage={this.previousPage}/>
        //     </Tab>
        //     <Tab label="Accident" value={4}>
        //       <AccidentForm onSubmit={this.handleSubmit} previousPage={this.previousPage}/>
        //     </Tab>
        //     <Tab label="Medical Care" value={5}>
        //       {/*<InsuranceForm onSubmit={this.handleSubmit} previousPage={this.previousPage}/>*/}
        //     </Tab>
        // </Tabs>
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
