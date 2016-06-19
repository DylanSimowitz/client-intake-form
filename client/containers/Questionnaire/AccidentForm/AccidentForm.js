import React from 'react';
import {TextField, AutoComplete, RaisedButton, TimePicker} from 'material-ui';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { reduxForm } from 'redux-form';
import { fields as insuranceFields } from '../InsuranceForm/InsuranceForm'
import { fields as employerFields } from '../EmployerForm/EmployerForm'
import { fields as personalFields } from '../PersonalForm/PersonalForm'

export const fields = [
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
    'accidentPersonsInjured',
    'accidentDescription'
  ]

const allFields = [...personalFields,...employerFields,...insuranceFields,...fields]

const styles = {
  imageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  }
}

class AccidentForm extends React.Component {
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
        accidentPersonsInjured,
        accidentDescription
      },
      handleSubmit,
      previousPage
    } = this.props
    return (
          <form onSubmit={handleSubmit} onChange={e => e.stopPropagation()}>
              <Row>
                  <Col xs={12} md={6}>
                    <AutoComplete floatingLabelText="Case Type" fullWidth={true} dataSource={caseTypes} filter={AutoComplete.noFilter} openOnFocus={true} {...accidentType}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Accident Time" fullWidth={true} {...accidentTime}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <TextField floatingLabelText="Accident City" fullWidth={true} {...accidentCity}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Cross Street" fullWidth={true} {...accidentStreet1}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Cross Street" fullWidth={true} {...accidentStreet2}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Street Client On" fullWidth={true} {...accidentStreetClient}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Direction" fullWidth={true} {...accidentDirectionClient}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Lane" fullWidth={true} {...accidentLaneClient}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Street Defendant On" fullWidth={true} {...accidentStreetDefendant}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Direction" fullWidth={true} {...accidentDirectionDefendant}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <TextField floatingLabelText="Lane" fullWidth={true} {...accidentLaneDefendant}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Persons in Auto" fullWidth={true} {...accidentPersonsCount}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <TextField floatingLabelText="Persons Injured" fullWidth={true} {...accidentPersonsInjured}/>
                  </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <TextField floatingLabelText="Accident Description" fullWidth={true} multiLine={true} rows={8} {...accidentDescription}/>
                </Col>
              </Row>
              {/*<Row>
                <Col xs={12}>
                  <RaisedButton label="Choose a Photo"><input type="file" style={styles.imageInput}/></RaisedButton><TextField floatingLabelText="Add Photo" fullWidth={true}></TextField>
                </Col>
              </Row>*/}
              {this.props.stepper}
          </form>
    )
  }
}


AccidentForm = reduxForm({
  form: 'questionnaire',
  fields: allFields,
  destroyOnUnmount: false
})(AccidentForm);


export default AccidentForm;
