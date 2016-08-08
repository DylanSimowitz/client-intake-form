import path from 'path'
import fs from 'fs'
import express from 'express'
const router = express.Router()
import Client from '../../database/models/Client'
import Validator from 'utils/validators'
import multer from 'multer'
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
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
        cb(null, dest)
      })
      let dest = `uploads/${req.body.personalLastName}_${req.body.personalFirstName}`
      try {
        fs.readdirSync(dest)
      }
      catch(err) {
        console.log('Creating new client: ' + dest);
        fs.mkdirSync(dest)
      }
      cb(null, dest)
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname + Date.now())
    }
  })
})
router.post('/', upload.array('accidentPhotos'), (req, res, next) => {
  let validator =  new Validator()
  validator.validate('phone', req.body.personalHomePhone)
  return new Promise(resolve, reject) {
    if (req.body.firstName)
  }
  if (req.body.firstName && req.body.lastName)
  // new Client({
  //   data: JSON.stringify(req.body)
  // })
  // .save()
  // .then(model => {
  //   res.status(200).send('Success')
  // })
})

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
