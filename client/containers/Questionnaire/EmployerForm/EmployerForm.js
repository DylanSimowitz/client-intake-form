import React from 'react'
import {TextField} from 'redux-form-material-ui'
import {Row, Col} from 'react-flexbox-grid'
import { Field,reduxForm } from 'redux-form'
import { normalizePhone } from 'redux/utils/normalizer'
import AddressFields from 'components/AddressFields'

class EmployerForm extends React.Component {
  render() {
    const {handleSubmit} = this.props
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
              <AddressFields form="employer" prefix="Employer"/>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="employerPhone" component={TextField} floatingLabelText="Employer Phone" fullWidth={true} normalize={normalizePhone}/>
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
                      <Field name="employerLossWages" component={TextField} floatingLabelText="Loss Wages" fullWidth={true}/>
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
})(EmployerForm)


export default EmployerForm
