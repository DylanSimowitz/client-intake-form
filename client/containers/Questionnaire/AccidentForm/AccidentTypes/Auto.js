import React from 'react';
import {GridList, GridTile} from 'material-ui';
import {TextField} from 'redux-form-material-ui'
import {Row, Col} from 'react-flexbox-grid';
import {Field, reduxForm} from 'redux-form';

class Auto extends React.Component {
  render() {
    return(
      <div>
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
      </div>
    )
  }
}

Auto = reduxForm({form: 'questionnaire'})(Auto);

export default Auto
