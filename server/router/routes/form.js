import path from 'path'
import fs from 'fs'
import express from 'express'
import Form from '../../database/models/Form'
import multer from 'multer'
import authentication from '../middleware/authentication'
import mkdirp from 'mkdirp'

const router = express.Router()
const upload = multer({
  dest: 'uploads',
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      cb(null, file.originalname + Date.now())
    }
  })
})
import Validate from '../middleware/validate'

const validation = new Validate('questionnaire')

router.post('/:formName', authentication, upload.single(), validation.validate, (req, res, next) => {
  new Form({client: res.locals.client.id, [req.params.formName]: JSON.stringify(req.body)})
    .save()
    .then(form => {
      upload.dest = `uploads/${res.locals.client.id}/${req.params.formName}`
      mkdirp.sync(upload.dest)
      res.json({success: true})
      next()
    })
  //new Form.query({
    //where: {id: res.locals.client.id}
  //})
  //.fetch().then(client => {
    //client.set('data', JSON.stringify(req.body))
  //}).save()
    //.then(client => {
      //upload.dest = `uploads/${client.id}`
      //mkdirp.sync(upload.dest)
      //res.json({success: true})
      //next()
    //})
}, upload.array('accidentPhotos'))

//router.get('/:userId', (req, res, next) => {
  //new Client({
    //id: req.params.userId
  //})
  //.fetch()
  //.then(model => {
    //res.status(200).send(model)
  //})
//})

//router.delete('/:userId', (req, res, next) => {
  //new Client({
    //id: req.params.userId
  //})
  //.destroy()
  //.then(model => {
    //res.status(200)
  //})
//})

module.exports = router
