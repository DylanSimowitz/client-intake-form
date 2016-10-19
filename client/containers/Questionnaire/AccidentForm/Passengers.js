import React, {Component} from 'react'
import {Field} from 'redux-form'
import {Row, Col} from 'react-flexbox-grid'
import {TextField, SelectField} from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import RemoveCircleIcon from 'material-ui/svg-icons/content/remove-circle'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import states from 'components/StateMenuItems'
import {normalizePhone} from 'redux/utils/normalizer'

const styles = {
  paper: {
    padding: '15px'
  },
  addButton: {
    margin: '10px 0px'
  }
}

const Passengers = ({ fields, meta: { touched, error } }) => (
  <div>
    <Col xs={12}>
      <RaisedButton
        label="Add Passenger"
        style={styles.addButton}
        primary={true}
        onClick={() => fields.push({})}/>
    </Col>
    {fields.map((passenger, index) =>
    <Row>
    <Paper zDepth={1} style={styles.paper}>
      <Row between="xs" middle="xs">
        <Col xs={4}>
        <h4>Passenger #{index + 1}</h4>
      </Col>
      <Col xs={8}>
        <Row end="xs">
        <FlatButton
          label="Remove Passenger"
          primary={true}
          icon={<RemoveCircleIcon/>}
          onClick={() => fields.remove(index)}/>
      </Row>
      </Col>
      </Row>
        <Field
          name={`${passenger}.firstName`}
          type="text"
          component={TextField}
          fullWidth={true}
          floatingLabelText="First Name"/>
        <Field
          name={`${passenger}.lastName`}
          type="text"
          fullWidth={true}
          component={TextField}
          floatingLabelText="Last Name"/>
        <Field
          name={`${passenger}.address`}
          component={TextField}
          floatingLabelText="Address"
          fullWidth={true}/>
        <Field
          name={`${passenger}.addressCity`}
          component={TextField}
          floatingLabelText="City"
          fullWidth={true}/>
        <Field
          name={`${passenger}.addressState`}
          component={SelectField}
          floatingLabelText="State"
          fullWidth={true}>
            {states}
        </Field>
        <Field
          name={`${passenger}.phone`}
          component={TextField}
          floatingLabelText="Phone"
          normalize={normalizePhone}
          fullWidth={true}/>
      </Paper>
  </Row>
    )}
  </div>
)

export default Passengers
