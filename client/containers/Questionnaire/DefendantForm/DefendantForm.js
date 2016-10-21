import React from 'react'
import {TextField, SelectField, DatePicker, Checkbox} from 'redux-form-material-ui'
import {Grid, Row, Col} from 'react-flexbox-grid'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import states from '../../../components/StateMenuItems'
import {normalizePhone} from 'redux/utils/normalizer'
import AddressFields from 'components/AddressFields'

class DefendantForm extends React.Component {
  render() {
    const {handleSubmit, contacted} = this.props
    return (
          <form onSubmit={handleSubmit}>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="defendantFirstName" component={TextField} floatingLabelText="First Name" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="defendantLastName" component={TextField} floatingLabelText="Last Name" fullWidth={true}/>
                  </Col>
              </Row>
              <AddressFields form="defendant" prefix=""/>
              <Row>
                  <Col xs={12} md={4}>
                      <Field name="defendantDateOfBirth" component={DatePicker} floatingLabelText="Date of Birth" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="defendantDriversLicense" component={TextField} floatingLabelText="Driver's License" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="defendantDriversLicenseState" component={SelectField} floatingLabelText="Driver's License State" fullWidth={true}>
                        {states}
                      </Field>
                  </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Field name="defendantAutoInsuranceCompany" component={TextField} floatingLabelText="Auto Insurance Company" fullWidth={true}/>
                </Col>
                <Col xs={12} md={6}>
                  <Field name="defendantAutoInsurancePolicy" component={TextField} floatingLabelText="Policy Number" fullWidth={true}/>
                </Col>
                <Col xs={12}>
                  <Field name="defendantAutoInsuranceContact" component={Checkbox} label="I have been contacted by the defendant's insurance company"/>
                </Col>
              </Row>
              {contacted &&
              <Row>
                <Col xs={12} md={6}>
                  <Field name="defendantAutoInsuranceContactName" component={TextField} floatingLabelText="Contact Name" fullWidth={true}/>
                </Col>
                <Col xs={12} md={6}>
                  <Field name="defendantAutoInsuranceContactPhone" component={TextField} normalize={normalizePhone} floatingLabelText="Contact Phone" fullWidth={true}/>
                </Col>
                <Col xs={12}>
                  <Field name="defendantAutoInsuranceContactStatement" component={Checkbox} label="I gave a recorded statement"/>
                </Col>
              </Row> 
              }
              {this.props.stepper}
          </form>
    )
  }
}


DefendantForm = reduxForm({
  form: 'questionnaire',
  destroyOnUnmount: false
})(DefendantForm)

const selector = formValueSelector('questionnaire')
DefendantForm = connect(state => {
  const contacted = selector(state, 'defendantAutoInsuranceContact')
  return {contacted}
})(DefendantForm)

export default DefendantForm
