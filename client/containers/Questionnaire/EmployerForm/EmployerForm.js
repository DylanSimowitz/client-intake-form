import React from 'react';
import {DatePicker, RaisedButton} from 'material-ui';
import {TextField, SelectField} from 'redux-form-material-ui'
import {Grid, Row, Col} from 'react-flexbox-grid';
import { Field,reduxForm } from 'redux-form';
import states from '../../../components/StateMenuItems';

class EmployerForm extends React.Component {
  render() {
    const {
      handleSubmit,
      previousPage
    } = this.props
    return (
          <form onSubmit={handleSubmit}>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="employerName" component={TextField} floatingLabelText="Employer Name" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="employerOccupation" component={TextField} floatingLabelText="Occupation" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <Field name="employerAddress" component={TextField} floatingLabelText="Employer Address" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={4}>
                      <Field name="employerAddressCity" component={TextField} floatingLabelText="Employer City" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="employerAddressState" component={SelectField} floatingLabelText="Employer State" fullWidth={true}>
                        {states}
                      </Field>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="employerAddressZipcode" component={TextField} floatingLabelText="Employer Zipcode" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="employerPhone" component={TextField} floatingLabelText="Employer Phone" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="employerSupervisor" component={TextField} floatingLabelText="Supervisor" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={4}>
                      <Field name="employerSalary" component={TextField} floatingLabelText="Salary" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="employerTimeLoss" component={TextField} floatingLabelText="Time Loss" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <DatePicker floatingLabelText="Loss Wages" fullWidth={true}/>
                  </Col>
              </Row>
              {this.props.stepper}
          </form>
    )
  }
}


EmployerForm = reduxForm({
  form: 'questionnaire',
  destroyOnUnmount: false
})(EmployerForm);


export default EmployerForm;
