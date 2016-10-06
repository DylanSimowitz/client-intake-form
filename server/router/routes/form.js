import express from 'express'
import Form from '../../database/models/Form'
import multer from 'multer'
import authentication from '../middleware/authentication'
import mkdirp from 'mkdirp'
import Validate from '../middleware/validate'

const router = express.Router()
const upload = multer({
  dest: 'uploads',
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      cb(null, file.originalname + Date.now())
    }
  })
})

router.post('/test', authentication, (req,res) => {
  new Form({client_id: res.locals.client.id}).save()
})

router.get('/:formName', authentication, (req, res) => {
  new Form({client_id: res.locals.client.id}).fetch().then(forms => {
    res.json(forms.questionnaire)
  })
})

router.post('/:formName', authentication, upload.single(), validation.validate, (req, res, next) => {
  new Form({client_id: res.locals.client.id, questionnaire: JSON.stringify(req.body)}).save().then(() => {
    upload.dest = `uploads/${res.locals.client.id}/${req.params.formName}`
    mkdirp.sync(upload.dest)
    res.json({success: true})
    next()
  })
}, upload.array('accidentPhotos'))

module.exports = router
