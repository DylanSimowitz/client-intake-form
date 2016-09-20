import validate from 'validate.js'

const constraints = {
  personalFirstName: {
    presence: true,
  },
  personalLastName: {
    presence: true,
  },
  // personalHomePhone: 'phone',
  // personalCellPhone: 'phone',
  personalAddress: {
    presence: true,
  },
  personalAddressCity: {
    presence: true,
  },
  personalAddressState: {
    presence: true,
  },
  personalAddressZipcode: {
    presence: true,
  },
  personalEmail: {
    presence: true,
  },
  // personalDriversLicense: 'alpha_numeric',
  personalDateOfBirth: {
    presence: true,
  },
  personalSSN: {
    presence: true,
  },
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
  accidentType: {
    presence: true,
  },
  accidentDate: {
    presence: true,
  },
  accidentTime: {
    presence: true,
  }
}
validate.validators.presence.message = 'This field is required'

export default function(data) {
  return validate.async(data, constraints, {fullMessages: false})
    // let questionnaireErrors = {_error: 'There was an error with your submission. Please correct the mistakes and try again.'}
    // if (validator.errors) {
    //   console.log(validation.errors)
    //   validation.errors.map(error => {
    //     questionnaireErrors[error.field] = error.message
    //   })
    //   return questionnaireErrors
    // }
    // return {}
}
