import React from 'react';
import {RaisedButton} from 'material-ui';
import {TextField} from 'redux-form-material-ui';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { Field, reduxForm } from 'redux-form';

class InsuranceForm extends React.Component {
  render() {
    const {
      handleSubmit,
      previousPage
    } = this.props
    return (
          <form onSubmit={handleSubmit} onChange={e => e.stopPropagation()}>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="insurance" component={TextField} floatingLabelText="Insurance Company" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="insurance" component={TextField} floatingLabelText="Insurance Agent" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <Field name="insurance" component={TextField} floatingLabelText="Insurance Address" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={4}>
                      <Field name="insurance" component={TextField} floatingLabelText="Insurance City" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="insurance" component={TextField} floatingLabelText="Insurance State" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="insurance" component={TextField} floatingLabelText="Insurance Zipcode" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="insurance" component={TextField} floatingLabelText="Insurance Policy #" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="insurance" component={TextField} floatingLabelText="Insurance Claim #" fullWidth={true}/>
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
})(InsuranceForm);


export default InsuranceForm;
