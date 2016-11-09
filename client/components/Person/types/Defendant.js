import React from 'react'
import {Field, formValueSelector} from 'redux-form'
import {connect} from 'react-redux'
import {TextField, SelectField, DatePicker, Checkbox} from 'redux-form-material-ui'
import states from 'components/StateMenuItems'
import {normalizePhone} from 'redux/utils/normalizer'

const Defendant = ({person, contacted}) => (
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
    <Field
      name={`${person}.dateOfBirth`}
      component={DatePicker}
      floatingLabelText="Date of Birth"
      fullWidth={true}/>
    <Field
      name={`${person}.driversLicense`}
      component={TextField}
      floatingLabelText="Driver's License"
      fullWidth={true}/>
    <Field
      name={`${person}.driversLicenseState`}
      component={SelectField}
      floatingLabelText="Driver's License State"
      fullWidth={true}>
      {states}
    </Field>
    <Field
      name={`${person}.autoInsuranceCompany`}
      component={TextField}
      floatingLabelText="Auto Insurance Company"
      fullWidth={true}/>
    <Field
      name={`${person}.autoInsurancePolicy`}
      component={TextField}
      floatingLabelText="Policy Number"
      fullWidth={true}/>
    <Field
      name={`${person}.autoInsuranceContact`}
      component={Checkbox}
      label="I have been contacted by the defendant's insurance company"
      fullWidth={true}/>
    {contacted &&
      <div>
      <Field
        name={`${person}.autoInsuranceContactName`}
        component={TextField}
        floatingLabelText="Contact Name"
        fullWidth={true}/>
      <Field
        name={`${person}.autoInsuranceContactPhone`}
        component={TextField}
        floatingLabelText="Contact Phone"
        normalize={normalizePhone}
        fullWidth={true}/>
      <Field
        name={`${person}.autoInsuranceContactStatement`}
        component={Checkbox}
        label="I gave a recorded statement"
        fullWidth={true}/> 
      </div>
    }
  </div>
)

const selector = formValueSelector('questionnaire')

export default connect((state, ownProps) => ({
  contacted: selector(state, `${ownProps.person}.autoInsuranceContact`)
}))(Defendant)
