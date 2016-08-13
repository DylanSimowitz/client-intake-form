class Validator {
  constructor(name, test) {
    this.type = {
      phone: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
      email: /^[a-zA-Z0-9+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/,
      ssn: /^\d{3}-\d{2}-\d{4}$/,
      creditcard: /^((4\d{3})|(5[1-5]\d{2})|(6011)|(7\d{3}))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/,
      zipcode: /^\d{5}(-\d{4})?$/
    }
    if (name && test) {
      this.addValidation(name, test)
    }
  }
  validate(type, value) {
    if (typeof type === 'string') {
      return value.match(this.type[type]) != null ? true : false;
    }
    elseif (Array.isArray(type)) {
      type.reduce(item => {

      })
    }
  }
  addValidation(name, test) {
    Object.assign(this.type, {[name]:test})
  }
}


module.exports = Validator;
{
  personalLastName: {
    value: 'simowitz'
    type: 'string'
  }
}
