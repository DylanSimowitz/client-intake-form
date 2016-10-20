import React from 'react'
import states from 'components/StateMenuItems'
import {TextField, SelectField} from 'redux-form-material-ui'
import {Row, Col} from 'react-flexbox-grid'
import {Field} from 'redux-form'
import {normalizeZipcode} from 'redux/utils/normalizer'

const AddressFields = (props) => {
  const {form, prefix} = props
  return ( 
    <Row>
      <Col xs={12}>
        <Field name={`${form}Address`} component={TextField} floatingLabelText={`${prefix} Address`} fullWidth={true} />
      </Col>
      <Col xs={12} md={4}>
        <Field name={`${form}AddressCity`} component={TextField} floatingLabelText={`${prefix} City`} fullWidth={true}/>
      </Col>
      <Col xs={12} md={4}>
        <Field name={`${form}AddressState`} component={SelectField} floatingLabelText={`${prefix} State`} fullWidth={true}>
          {states}
        </Field>
      </Col>
      <Col xs={12} md={4}>
        <Field name={`${form}AddressZipcode`} component={TextField} floatingLabelText={`${prefix} Zipcode`} fullWidth={true} normalize={normalizeZipcode}/>
      </Col>
    </Row>
  )
}

export default AddressFields
