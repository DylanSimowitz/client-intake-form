import validate from 'validate.js'

validate.validators.presence.message = 'This field is required'

const constraints = {
    login: {
      email: {
        presence: true
      },
      password: {
        presence: true
      }
    },
    register: {
      first_name: {
        presence: true
      },
      last_name: {
        presence: true
      },
      email: {
        presence: true,
        email: {
          message: 'Not a valid email'
        }
      },
      password: {
        presence: true,
      }
    },
    questionnaire: {
      personalFirstName: {
        presence: true,
      },
      personalLastName: {
        presence: true,
      },
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
      personalDateOfBirth: {
        presence: true,
      },
      personalSSN: {
        presence: true,
      },
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
  } 

  export default (formName) => {
    return (req, res, next) => {
      validate.async(req.body, constraints[formName ? formName : req.params.formName], {fullMessages: false})
      .then(() => next(), errors => {
        errors._error = 'Correct all marked fields and try again'
        res.status(400).json(errors)
      })
    }
  }
