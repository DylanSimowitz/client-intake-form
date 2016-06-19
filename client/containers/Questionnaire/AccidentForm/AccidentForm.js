import React from 'react';
import {AutoComplete, RaisedButton, TimePicker} from 'material-ui';
import {TextField} from 'redux-form-material-ui'
import {Grid, Row, Col} from 'react-flexbox-grid';
import { Field, reduxForm } from 'redux-form';

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
      handleSubmit,
      previousPage
    } = this.props
    return (
          <form onSubmit={handleSubmit} onChange={e => e.stopPropagation()}>
              <Row>
                  <Col xs={12} md={6}>
                  <Field name="accidentType" component={accidentType =>
                    <AutoComplete floatingLabelText="Case Type" fullWidth={true} dataSource={caseTypes} filter={AutoComplete.noFilter} openOnFocus={true} {...accidentType}/>
                  }/>
                  </Col>
                  <Col xs={12} md={6}>
                      <TimePicker floatingLabelText="Accident Time" fullWidth={true}/>
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
                  <Field name="accidentDirectionClient" component={TextField} floatingLabelText="Direction" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                  <Field name="accidentLaneClient" component={TextField} floatingLabelText="Lane" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                  <Field name="accidentStreetDefendant" component={TextField} floatingLabelText="Street Defendant On" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                  <Field name="accidentDirectionDefendant" component={TextField} floatingLabelText="Direction" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                  <Field name="accidentLaneDefendant" component={TextField} floatingLabelText="Lane" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                  <Field name="accidentPersonsCount" component={TextField} floatingLabelText="Persons in Auto" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                    <Field name="accidentPersonsInjured" component={TextField} floatingLabelText="Persons Injured" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Field name="accidentDescription" component={TextField} floatingLabelText="Accident Description" fullWidth={true} multiLine={true} rows={8}/>
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
  destroyOnUnmount: false
})(AccidentForm);


export default AccidentForm;
