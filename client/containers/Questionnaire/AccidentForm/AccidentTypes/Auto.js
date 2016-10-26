import React from 'react'
import {TextField, SelectField} from 'redux-form-material-ui'
import {Row, Col} from 'react-flexbox-grid'
import {Field, FieldArray, reduxForm} from 'redux-form'
import Persons from 'components/Persons'
import directions from 'components/DirectionMenuItems'

class Auto extends React.Component {
  render() {
    return(
      <div>
      <Row>
        <Col xs={12} md={5}>
          <Field name="accidentPoliceDepartment" component={TextField} fullWidth={true} floatingLabelText="Police Department"/>
        </Col>
        <Col xs={12} md={4}>
          <Field name="accidentPoliceReport" component={TextField} fullWidth={true} floatingLabelText="Police Report Number"/>
        </Col>
        <Col xs={12} md={3}>
          <Field name="accidentLicensePlate" component={TextField} fullWidth={true} floatingLabelText="Vehicle License Plate"/>
        </Col>
      </Row>
      <Row>
          <Col xs={12}>
              <Field name="accidentCity" component={TextField} floatingLabelText="Accident City" fullWidth={true}/>
          </Col>
      </Row>
      <Row>
          <Col xs={12} md={6}>
              <Field name="accidentStreet1" component={TextField} floatingLabelText="Cross Street" fullWidth={true}/>
          </Col>
          <Col xs={12} md={6}>
              <Field name="accidentStreet2" component={TextField} floatingLabelText="Cross Street" fullWidth={true}/>
          </Col>
          <Col xs={12} md={4}>
              <Field name="accidentStreetClient" component={TextField} floatingLabelText="Street Client On" fullWidth={true}/>
          </Col>
          <Col xs={12} md={4}>
            <Field name="accidentDirectionClient" component={SelectField} floatingLabelText="Direction" fullWidth={true}>
              {directions}
            </Field>
          </Col>
          <Col xs={12} md={4}>
              <Field name="accidentLaneClient" component={TextField} floatingLabelText="Lane" fullWidth={true}/>
          </Col>
          <Col xs={12} md={4}>
              <Field name="accidentStreetDefendant" component={TextField} floatingLabelText="Street Defendant On" fullWidth={true}/>
          </Col>
          <Col xs={12} md={4}>
            <Field name="accidentDirectionDefendant" component={SelectField} floatingLabelText="Direction" fullWidth={true}>
              {directions}
            </Field>
          </Col>
          <Col xs={12} md={4}>
              <Field name="accidentLaneDefendant" component={TextField} floatingLabelText="Lane" fullWidth={true}/>
          </Col>
      </Row>
        <FieldArray name="accidentPassengers" component={Persons} personType="Passenger"/>
      </div>
    )
  }
}

Auto = reduxForm({form: 'questionnaire', destroyOnUnmount: false})(Auto)

export default Auto
