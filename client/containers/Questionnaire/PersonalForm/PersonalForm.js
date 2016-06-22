import React from 'react';
import {DatePicker, RaisedButton, MenuItem, FloatingActionButton} from 'material-ui';
import {TextField, SelectField} from 'redux-form-material-ui';
import states from '../../../components/StateMenuItems';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { Field, reduxForm } from 'redux-form';
import AddIcon from 'material-ui/svg-icons/content/add';

class PersonalForm extends React.Component {
  constructor() {
    super()
    this.state = {
      photos: []
    }
  }
  render() {
    const {
      handleSubmit,
      stopPropagation
    } = this.props
    return (
          <form onSubmit={handleSubmit} onChange={e => e.stopPropagation()}>
              <Row>
                  <Col xs={12} md={6}>
                      {/*<Field name="personalFirstName" component={TextField} floatingLabelText="First Name" fullWidth={true}/>*/}
                      {/*{this.state.photos}
                      <FloatingActionButton mini={true} zDepth={2} onMouseDown={this.addPhoto}>
                        <AddIcon/>
                      </FloatingActionButton>*/}
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="personalLastName" component={TextField} floatingLabelText="Last Name" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <DatePicker floatingLabelText="Accident Date" fullWidth={true}/>
                  </Col>

                  <Col xs={12} md={6}>
                      <Field name="personalSSN" component={TextField} floatingLabelText="SSN" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="personalHomePhone" component={TextField} floatingLabelText="Home Phone" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="personalCellPhone" component={TextField} floatingLabelText="Cell Phone" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <Field name="personalAddress" component={TextField} floatingLabelText="Address" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={4}>
                      <Field name="personalAddressCity" component={TextField} floatingLabelText="City" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="personalAddressState" component={SelectField} floatingLabelText="State" fullWidth={true}>
                        {states}
                      </Field>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="personalAddressZipcode" component={TextField} floatingLabelText="Zipcode" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12}>
                      <Field name="personalEmail" component={TextField} floatingLabelText="Email" fullWidth={true}/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="personalDriversLicense" component={TextField} floatingLabelText="Driver's License" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <DatePicker floatingLabelText="Date of Birth" fullWidth={true}/>
                  </Col>
              </Row>
              {this.props.stepper}
          </form>
    )
  }
}


PersonalForm = reduxForm({
  form: 'questionnaire',
  destroyOnUnmount: false
})(PersonalForm);

export default PersonalForm;
