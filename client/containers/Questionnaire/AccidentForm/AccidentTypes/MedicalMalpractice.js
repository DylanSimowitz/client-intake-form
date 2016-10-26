import React from 'react'
import {TextField, SelectField} from 'redux-form-material-ui'
import {Row, Col} from 'react-flexbox-grid'
import {Field, FieldArray, reduxForm} from 'redux-form'
import Persons from 'components/Persons'
import directions from 'components/DirectionMenuItems'
import {normalizeDate} from 'redux/utils/normalizer'

class MedicalMalpractice extends React.Component {
  render() {
    return(
      <div>
      <Row>
        <Col xs={12} md={6}>
          <Field name="accidentNegligenceDate" component={TextField} normalize={normalizeDate} fullWidth={true} floatingLabelText="Date you suspected negligence"/>
        </Col>
        <Col xs={12} md={6}>
          <Field name="accidentNegligencePerson" component={TextField} fullWidth={true} floatingLabelText="Who do you alleged to have been negligent?"/>
        </Col>
        <Col xs={12}>
          <Field name="accidentNegligenceCause" component={TextField} fullWidth={true} floatingLabelText="Why do you believe they were negligent?" multiLine={true} rows={6}/>
        </Col>
        <Col xs={12}>
          <Field name="accidentNegligenceDamages" component={TextField} fullWidth={true} floatingLabelText="What damages have you incurred due to the negligence?" multiLine={true} rows={6}/>
        </Col>
      </Row>
      </div>
    )
  }
}

MedicalMalpractice = reduxForm({form: 'questionnaire', destroyOnUnmount: false})(MedicalMalpractice)

export default MedicalMalpractice
