import React from 'react';
import {TextField, DatePicker, RaisedButton} from 'material-ui';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { reduxForm } from 'redux-form';

export const fields = [
  'firstName',
  'lastName',
  'accidentDate',
  'socialSecurityNumber',
  'homePhone',
  'cellPhone',
  'address',
  'city',
  'state',
  'zipcode',
  'email',
  'driversLicense',
  'dateOfBirth'
]

class PersonalForm extends React.Component {
  render() {
    const {
      fields: {
        firstName,
        lastName,
        accidentDate,
        socialSecurityNumber,
        homePhone,
        cellPhone,
        address,
        city,
        state,
        zipcode,
        email,
        driversLicense,
        dateOfBirth
      },
      handleSubmit,
      stopPropagation
    } = this.props
    return (
          <form onSubmit={handleSubmit} onChange={e => e.stopPropagation()}>
              <Row>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="First Name" fullWidth={true} {...firstName}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Last Name" fullWidth={true} {...lastName}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <DatePicker floatingLabelText="Accident Date" fullWidth={true} {...accidentDate}/>
                  </Col>

                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="SSN" fullWidth={true} {...socialSecurityNumber}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Home Phone" fullWidth={true} {...homePhone}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Cell Phone" fullWidth={true} {...cellPhone}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <TextField floatingLabelText="Address" fullWidth={true} {...address}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="City" fullWidth={true} {...city}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="State" fullWidth={true} {...state}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Zipcode" fullWidth={true} {...zipcode}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <TextField floatingLabelText="Email" fullWidth={true} {...email}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Driver's License" fullWidth={true} {...driversLicense}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <DatePicker floatingLabelText="Date of Birth" fullWidth={true} {...dateOfBirth}/>
                  </Col>
              </Row>
              {this.props.stepper}
          </form>
    )
  }
}


PersonalForm = reduxForm({
  form: 'questionnaire',
  fields,
  destroyOnUnmount: false
})(PersonalForm);


export default PersonalForm;
