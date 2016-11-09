import React from 'react'
import {Field} from 'redux-form'
import {TextField, SelectField} from 'redux-form-material-ui'
import states from 'components/StateMenuItems'
import {normalizePhone} from 'redux/utils/normalizer'

const Default = ({person}) => (
  <div>
    <Field
      name={`${person}.firstName`}
      type="text"
      component={TextField}
      fullWidth={true}
      floatingLabelText="First Name"/>
    <Field
      name={`${person}.lastName`}
      type="text"
      fullWidth={true}
      component={TextField}
      floatingLabelText="Last Name"/>
    <Field
      name={`${person}.address`}
      component={TextField}
      floatingLabelText="Address"
      fullWidth={true}/>
    <Field
      name={`${person}.addressCity`}
      component={TextField}
      floatingLabelText="City"
      fullWidth={true}/>
    <Field
      name={`${person}.addressState`}
      component={SelectField}
      floatingLabelText="State"
      fullWidth={true}>
        {states}
    </Field>
    <Field
      name={`${person}.phone`}
      component={TextField}
      floatingLabelText="Phone"
      normalize={normalizePhone}
      fullWidth={true}/>
  </div>
)

export default Default
