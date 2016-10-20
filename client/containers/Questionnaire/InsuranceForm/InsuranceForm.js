import React from 'react'
import {TextField, SelectField} from 'redux-form-material-ui'
import {Grid, Row, Col} from 'react-flexbox-grid'
import { Field, reduxForm } from 'redux-form'
import states from '../../../components/StateMenuItems'
import { normalizeZipcode } from 'redux/utils/normalizer'
import AddressFields from 'components/AddressFields'

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
              <AddressFields form="insurance" prefix="Insurance"/>
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
