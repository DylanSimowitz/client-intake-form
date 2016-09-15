import path from 'path'
import fs from 'fs'
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
import validateQuestionnaire from '../../shared/validations/questionnaire'

router.post('/', upload.single(), (req, res, next) => {
function success(attributes) {
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
}
function error(errors) {
  console.log(errors)
  res.status(400).send(errors)
}
  validateQuestionnaire(req.body)
  .then(success, error)
},
upload.array('accidentPhotos'))

router.get('/:userId', (req, res, next) => {
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
