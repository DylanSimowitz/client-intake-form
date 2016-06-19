import React from 'react';
import {TextField, RaisedButton} from 'material-ui';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { reduxForm } from 'redux-form';

export const fields = [
  'insuranceCompany',
  'insuranceAgent',
  'insuranceAddress',
  'insuranceCity',
  'insuranceState',
  'insuranceZipcode',
  'insurancePolicyNumber',
  'insuranceClaimNumber'
]

class InsuranceForm extends React.Component {
  render() {
    const {
      fields: {
        insuranceCompany,
        insuranceAgent,
        insuranceAddress,
        insuranceCity,
        insuranceState,
        insuranceZipcode,
        insurancePolicyNumber,
        insuranceClaimNumber
      },
      handleSubmit,
      previousPage
    } = this.props
    return (
          <form onSubmit={handleSubmit} onChange={e => e.stopPropagation()}>
              <Row>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Insurance Company" fullWidth={true} {...insuranceCompany}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Insurance Agent" fullWidth={true} {...insuranceAgent}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <TextField floatingLabelText="Insurance Address" fullWidth={true} {...insuranceAddress}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Insurance City" fullWidth={true} {...insuranceCity}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Insurance State" fullWidth={true} {...insuranceState}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Insurance Zipcode" fullWidth={true} {...insuranceZipcode}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Insurance Policy #" fullWidth={true} {...insurancePolicyNumber}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Insurance Claim #" fullWidth={true} {...insuranceClaimNumber}/>
                  </Col>
              </Row>
              {this.props.stepper}
          </form>
    )
  }
}


InsuranceForm = reduxForm({
  form: 'questionnaire',
  fields,
  destroyOnUnmount: false
})(InsuranceForm);


export default InsuranceForm;
