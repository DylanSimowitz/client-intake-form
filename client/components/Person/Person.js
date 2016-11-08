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
    padding: '15px',
    margin: '0.5rem 2px'
  },
  addButton: {
    margin: '10px 0px'
  }
}

const Persons = ({ personType, Fields, fields, meta: { touched, error } }) => (
  <Row>
    <Col xs={12}>
      <RaisedButton
        label={`Add ${personType}`}
        style={styles.addButton}
        primary={true}
        onClick={() => fields.push({})}/>
    </Col>
    {fields.map((person, index) =>
    <Col xs={12} md={6} key={index}>
    <Paper zDepth={1} style={styles.paper}>
      <Row between="xs" middle="xs">
        <Col xs={4}>
          <h4>{personType} #{index + 1}</h4>
        </Col>
        <Col xs={8}>
          <Row end="xs">
          <FlatButton
            label={`Remove ${personType}`}
            primary={true}
            icon={<RemoveCircleIcon/>}
            onClick={() => fields.remove(index)}/>
          </Row>
        </Col>
      </Row>
      <Fields person={person}/>
      </Paper>
    </Col>
    )}
  </Row>
)

export default Persons 
