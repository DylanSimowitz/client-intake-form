import React from 'react';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import {RaisedButton, MenuItem, FloatingActionButton} from 'material-ui';
import {TextField, SelectField, Checkbox, DatePicker} from 'redux-form-material-ui';
import states from '../../../components/StateMenuItems';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import AddIcon from 'material-ui/svg-icons/content/add';


class PersonalForm extends React.Component {
  constructor() {
    super()
    this.state = {
      photos: [],
    }
  }

  render() {
    const {
      handleSubmit,
      stopPropagation,
      isFelon
    } = this.props
    return (
          <form onSubmit={handleSubmit}>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="personalFirstName" component={TextField} floatingLabelText="First Name" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="personalLastName" component={TextField} floatingLabelText="Last Name" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="personalHomePhone" component={TextField} floatingLabelText="Home Phone" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="personalCellPhone" component={TextField} floatingLabelText="Cell Phone" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <Field name="personalAddress" component={TextField} floatingLabelText="Address" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={4}>
                      <Field name="personalAddressCity" component={TextField} floatingLabelText="City" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="personalAddressState" component={SelectField} floatingLabelText="State" fullWidth={true}>
                        {states}
                      </Field>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="personalAddressZipcode" component={TextField} floatingLabelText="Zipcode" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <Field name="personalEmail" component={TextField} floatingLabelText="Email" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={4}>
                      <Field name="personalDriversLicense" component={TextField} floatingLabelText="Driver's License" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="personalDateOfBirth" component={DatePicker} floatingLabelText="Date of Birth" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="personalSSN" component={TextField} floatingLabelText="SSN" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Field name="personalIsFelon" component={Checkbox} label="I have been convicted of a felony"/>
                </Col>
              </Row>
              {/*<ExpandTransition open={isFelon}>*/}
              {isFelon &&
                <Row>
                  <Col xs={12} md={4}>
                    <Field name="personalFelonyDate" component={DatePicker} floatingLabelText="Felony Court Date" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                    <Field name="personalFelonyCourt" component={TextField} floatingLabelText="Felony Court Name" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                    <Field name="personalFelonyCase" component={TextField} floatingLabelText="Felony Case Number" fullWidth={true}/>
                  </Col>
                </Row>
              }
              {/*</ExpandTransition>*/}
              <Row>
                <Col xs={12}>
                  {this.props.stepper}
                </Col>
              </Row>
          </form>
    )
  }
}


PersonalForm = reduxForm({
  form: 'questionnaire',
  destroyOnUnmount: false
})(PersonalForm);

const selector = formValueSelector('questionnaire')
PersonalForm = connect(state => {
  const isFelon = selector(state, 'personalIsFelon')
  return {
    isFelon
  }
})(PersonalForm)

export default PersonalForm;
