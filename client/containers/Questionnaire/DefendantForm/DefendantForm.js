import React from 'react'
import {TextField, SelectField, DatePicker, Checkbox} from 'redux-form-material-ui'
import {Grid, Row, Col} from 'react-flexbox-grid'
import { Field, FieldArray, formValueSelector, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import states from '../../../components/StateMenuItems'
import {normalizePhone} from 'redux/utils/normalizer'
import AddressFields from 'components/AddressFields'
import Person from 'components/Person'
import Defendant from 'components/Person/types/Defendant'

class DefendantForm extends React.Component {
  render() {
    const {handleSubmit, contacted} = this.props
    return (
          <form onSubmit={handleSubmit}>
            <FieldArray name="defendant" component={Person} personType="Defendant" Fields={Defendant}/>
              {this.props.stepper}
          </form>
    )
  }
}


DefendantForm = reduxForm({
  form: 'questionnaire',
  destroyOnUnmount: false
})(DefendantForm)

const selector = formValueSelector('questionnaire')
DefendantForm = connect(state => {
  const contacted = selector(state, 'defendantAutoInsuranceContact')
  return {contacted}
})(DefendantForm)

export default DefendantForm
