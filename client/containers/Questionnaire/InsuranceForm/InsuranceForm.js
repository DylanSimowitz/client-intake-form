import React from 'react'
import {TextField, SelectField} from 'redux-form-material-ui'
import {Grid, Row, Col} from 'react-flexbox-grid'
import { Field, reduxForm } from 'redux-form'
import states from '../../../components/StateMenuItems'
import { normalizeZipcode } from 'redux/utils/normalizer'

class InsuranceForm extends React.Component {
  render() {
    const {
      handleSubmit,
      previousPage
    } = this.props
    return (
          <form onSubmit={handleSubmit}>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="insuranceCompany" component={TextField} floatingLabelText="Insurance Company" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="insuranceAgent" component={TextField} floatingLabelText="Insurance Agent" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <Field name="insuranceAddress" component={TextField} floatingLabelText="Insurance Address" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={4}>
                      <Field name="insuranceAddressCity" component={TextField} floatingLabelText="Insurance City" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                    <Field name="insuranceAddressState" component={SelectField} floatingLabelText="Insurance State" fullWidth={true}>
                      {states}
                    </Field>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="insuranceAddressZipcode" component={TextField} floatingLabelText="Insurance Zipcode" fullWidth={true} normalize={normalizeZipcode}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="insurancePolicyNumber" component={TextField} floatingLabelText="Insurance Policy #" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="insuranceClaimNumber" component={TextField} floatingLabelText="Insurance Claim #" fullWidth={true}/>
                  </Col>
              </Row>
              {this.props.stepper}
          </form>
    )
  }
}


InsuranceForm = reduxForm({
  form: 'questionnaire',
  destroyOnUnmount: false
})(InsuranceForm)


export default InsuranceForm
