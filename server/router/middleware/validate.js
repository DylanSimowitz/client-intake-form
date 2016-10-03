import validate from 'validate.js'

validate.validators.presence.message = 'This field is required'

export default class ValidateMiddleware {
  constructor(form) {
    this.form = form
  }

  constraints = {
    login: {
      email: {
        presence: true
      },
      password: {
        presence: true
      }
    },
    register: {
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

  validate = (req, res, next) => {
    validate.async(req.body, this.constraints[this.form], {fullMessages: false})
      .then(() => next(), errors => {
        errors._error = 'Correct all marked fields and try again'
        res.json(errors)
      })
  }
}
