import React from 'react'
import {TextField, AutoComplete, RaisedButton, TimePicker} from 'material-ui'
import {Grid, Row, Col} from 'react-flexbox-grid'
import {TextField, SelectField} from 'redux-form-material-ui'
import { reduxForm } from 'redux-form'

class MedicalForm extends React.Component {
  handleSubmit(data) {
    fetch('/client', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
  render() {
    const caseTypes = [
      'Auto',
      'Motorcycle',
      'Slip & Fall',
      'Premises',
      'Malpractice',
      'Wrongful Death',
      'Dog Bites',
      'Product Liability'
    ]
    const {
      fields: {
        accidentType,
        accidentTime,
        accidentCity,
        accidentStreet1,
        accidentStreet2,
        accidentStreetClient,
        accidentDirectionClient,
        accidentLaneClient,
        accidentStreetDefendant,
        accidentDirectionDefendant,
        accidentLaneDefendant,
        accidentPersonsCount,
        accidentPersonsInjured
      },
      handleSubmit,
      previousPage
    } = this.props
    return (
      <Grid fluid={true}>
          <form onSubmit={handleSubmit}>
              <Row>
                  <Col xs={12} md={6}>
                    <Field name="medical">

                    </Field>
                  </Col>
                  <Col xs={12} md={6}>
                      <TimePicker floatingLabelText="Accident Time" fullWidth={true} {...accidentTime}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <TextField floatingLabelText="Accident City" fullWidth={true} {...accidentCity}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={6}>
                      <TextField floatingLabelText="Cross Street" fullWidth={true} {...accidentStreet1}/>
                  </Col>
                  <Col xs={6}>
                      <TextField floatingLabelText="Cross Street" fullWidth={true} {...accidentStreet2}/>
                  </Col>
                  <Col xs={4}>
                      <TextField floatingLabelText="Street Client On" fullWidth={true} {...accidentStreetClient}/>
                  </Col>
                  <Col xs={4}>
                      <TextField floatingLabelText="Direction" fullWidth={true} {...accidentDirectionClient}/>
                  </Col>
                  <Col xs={4}>
                      <TextField floatingLabelText="Lane" fullWidth={true} {...accidentLaneClient}/>
                  </Col>
                  <Col xs={4}>
                      <TextField floatingLabelText="Street Defendant On" fullWidth={true} {...accidentStreetDefendant}/>
                  </Col>
                  <Col xs={4}>
                      <TextField floatingLabelText="Direction" fullWidth={true} {...accidentDirectionDefendant}/>
                  </Col>
                  <Col xs={4}>
                      <TextField floatingLabelText="Lane" fullWidth={true} {...accidentLaneDefendant}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={6}>
                      <TextField floatingLabelText="Persons in Auto" fullWidth={true} {...accidentPersonsCount}/>
                  </Col>
                  <Col xs={6}>
                      <TextField floatingLabelText="Persons Injured" fullWidth={true} {...accidentPersonsInjured}/>
                  </Col>
              </Row>
              <Row bottom="xs">
                <Col xs={12}>
                  <RaisedButton label="Previous" onClick={previousPage}/>
                  <RaisedButton label="Next" type="submit"/>
                </Col>
              </Row>
          </form>
      </Grid>
    )
  }
}


MedicalForm = reduxForm({
  form: 'questionnaire',
  fields: [
    'accidentType',
    'accidentTime',
    'accidentCity',
    'accidentStreet1',
    'accidentStreet2',
    'accidentStreetClient',
    'accidentDirectionClient',
    'accidentLaneClient',
    'accidentStreetDefendant',
    'accidentDirectionDefendant',
    'accidentLaneDefendant',
    'accidentPersonsCount',
    'accidentPersonsInjured'
  ],
  destroyOnUnmount: false
})(MedicalForm)


export default MedicalForm
