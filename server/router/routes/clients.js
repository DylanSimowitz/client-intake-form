import path from 'path'
import fs from 'fs'
import indicative from 'indicative'
import express from 'express'
const router = express.Router()
import Client from '../../database/models/Client'
import multer from 'multer'
const upload = multer({
  dest: 'uploads',
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      cb(null, file.originalname + Date.now())
    }
  })
})
// const phone = (data, field, message, args, get) => {
//   return new Promise((resolve, reject) => {
//     const fieldValue = get(data, field)
//     if(!fieldValue) {
//       return resolve('validation skipped')
//     }
//     const PHONE_REGEX = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/
//     PHONE_REGEX.test(fieldValue) ? resolve('Valid phone number') : reject(message)
//   })
// }
// indicative.extend('phone', phone, 'Field should be a phone number.')
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
router.post('/', upload.single(), (req, res, next) => {
  indicative
  .validateAll(req.body, rules, messages)
  .then(() => {
    new Client({
      data: JSON.stringify(req.body)
    })
    .save()
    .then(model => {
      let dest = `uploads/${model.id}`
      try {
        fs.readdirSync(dest)
      }
      catch(err) {
        console.log('Creating new client: ' + dest);
        fs.mkdirSync(dest)
      }
      finally {
        upload.dest = dest
        res.status(200).send('OK')
      }
    })
    .catch(error => {
      res.status(500)
    })
  })
  .catch(errors => {
    console.log(errors);
    res.status(400).json({errors})
  })
},
upload.array('accidentPhotos'))

router.get('/:userId', (req, res, next) => {
  multer.onParseEnd(req, next => {

  })
  new Client({
    id: req.params.userId
  })
  .fetch()
  .then(model => {
    res.status(200).send(model)
  })
})

router.delete('/:userId', (req, res, next) => {
  new Client({
    id: req.params.userId
  })
  .destroy()
  .then(model => {
    res.status(200)
  })
})

module.exports = router
