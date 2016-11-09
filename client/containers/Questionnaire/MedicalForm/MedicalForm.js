import React, {PropTypes} from 'react'
import MenuItem from 'material-ui/MenuItem'
import {SelectField, DatePicker, TimePicker, TextField, Checkbox} from 'redux-form-material-ui'
import {Row, Col} from 'react-flexbox-grid'
import {Field, FieldArray, formValueSelector, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {normalizePhone} from 'redux/utils/normalizer'
import AddressFields from 'components/AddressFields'
import Person from 'components/Person'
import Default from 'components/Person/types/Default'

class MedicalForm extends React.Component { 
  
  render() {
    const {handleSubmit, emergencyCare} = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Field name="medicalEmergency" component={Checkbox} label="I received emergency medical treatment"/>
          </Col>
        </Row>
        {emergencyCare &&
        <div>
          <Row>
            <Col xs={12}>
              <Field name="medicalEmergencyName" component={TextField} fullWidth={true} floatingLabelText="Hospital Name"/>
            </Col>
            <Col xs={12}>
              <Field name="medicalEmergencyPhone" component={TextField} fullWidth={true} normalize={normalizePhone} floatingLabelText="Hospital Phone"/>
            </Col>
          </Row>
          <AddressFields form="medical" prefix="Hospital"/>
        </div>
        }
        <FieldArray name="medicalPhysicians" component={Person} Fields={Default} personType="Physician"/>
        {this.props.stepper}
      </form>
      )
  }
}

MedicalForm = reduxForm({form: 'questionnaire', destroyOnUnmount: false})(MedicalForm)

const selector = formValueSelector('questionnaire')
MedicalForm = connect(state => {
  const emergencyCare = selector(state, 'medicalEmergency')
  return {
    emergencyCare 
  }
})(MedicalForm)

export default MedicalForm 
