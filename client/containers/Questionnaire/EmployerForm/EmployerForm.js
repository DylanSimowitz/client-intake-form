import React from 'react';
import {TextField, DatePicker, RaisedButton} from 'material-ui';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { reduxForm } from 'redux-form';

export const fields = [
  'employerName',
  'occupation',
  'employerAddress',
  'employerCity',
  'employerState',
  'employerZipcode',
  'employerPhone',
  'supervisor',
  'salary',
  'timeLoss',
  'lossWages'
]

class EmployerForm extends React.Component {
  render() {
    const {
      fields: {
        employerName,
        occupation,
        employerAddress,
        employerCity,
        employerState,
        employerZipcode,
        employerPhone,
        supervisor,
        salary,
        timeLoss,
        lossWages
      },
      handleSubmit,
      previousPage
    } = this.props
    return (
          <form onSubmit={handleSubmit} onChange={e => e.stopPropagation()}>
              <Row>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Employer Name" fullWidth={true} {...employerName}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Occupation" fullWidth={true} {...occupation}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <TextField floatingLabelText="Employer Address" fullWidth={true} {...employerAddress}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Employer City" fullWidth={true} {...employerCity}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Employer State" fullWidth={true} {...employerState}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Employer Zipcode" fullWidth={true} {...employerZipcode}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Employer Phone" fullWidth={true} {...employerPhone}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Supervisor" fullWidth={true} {...supervisor}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Salary" fullWidth={true} {...salary}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Time Loss" fullWidth={true} {...timeLoss}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <DatePicker floatingLabelText="Loss Wages" fullWidth={true} {...lossWages}/>
                  </Col>
              </Row>
              {this.props.stepper}
          </form>
    )
  }
}


EmployerForm = reduxForm({
  form: 'questionnaire',
  fields,
  destroyOnUnmount: false
})(EmployerForm);


export default EmployerForm;
