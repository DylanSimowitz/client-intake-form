import indicative from 'indicative'

const rules = {
  personalFirstName: 'required',
  personalLastName: 'required',
  // personalHomePhone: 'phone',
  // personalCellPhone: 'phone',
  personalAddress: 'required',
  personalAddressCity: 'required',
  personalAddressState: 'required',
  personalAddressZipcode: 'required',
  personalEmail: 'required|email',
  // personalDriversLicense: 'alpha_numeric',
  personalDateOfBirth: 'required',
  personalSSN: 'required',
  // personalIsFelon: 'boolean',
  // personalFelonyDate: 'date',
  // personalFelonyCourt: 'alpha_numeric',
  // personalFelonyCase: 'alpha_numeric',
  // employerName: 'required',
  // employerOccupation: 'alpha',
  // employerAddress: 'required',
  // employerAddressCity: 'required',
  // employerAddressState: 'required',
  // employerAddressZipcode: 'required',
  // employerPhone: 'required',
  // employerSupervisor: 'alpha',
  // employerSalary: 'alpha_numeric',
  // employerTimeLoss: 'alpha_numeric',
  // employerLossWages: 'integer',
  // insuranceCompany: 'alpha',
  // insuranceAgent: 'alpha',
  // insuranceAddress: 'alpha_numeric',
  // insuranceAddressCity: 'alpha',
  // insuranceAddressState: 'alpha',
  // insuranceAddressZipcode: 'integer',
  // insurancePolicyNumber: 'alpha_numeric',
  // insuranceClaimNumber: 'alpha_numeric',
  accidentType: 'required',
  accidentDate: 'required',
  accidentTime: 'required'
}
const messages = {
  required: 'This field is required.',
  email: 'Not a valid email.'
}
export default function(data) {
  return Promise.resolve(indicative.validateAll(data, rules, messages).catch(errors => {
      let questionnaireErrors = {_error: 'There was an error with your submission. Please correct the mistakes and try again.'}
      if (errors) {
        console.log(errors);
        errors.map(error => {
          questionnaireErrors[error.field] = error.message
        })
        return questionnaireErrors
      }
      return {}
    }))
}
