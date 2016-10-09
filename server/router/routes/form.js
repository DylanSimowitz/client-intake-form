import express from 'express'
import User from '../../database/models/User'
import Form from '../../database/models/Form'
import multer from 'multer'
import authentication from '../middleware/authentication'
import mkdirp from 'mkdirp'
import validate from '../middleware/validate'

const router = express.Router()
const upload = multer({
  dest: 'uploads',
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      cb(null, file.originalname + Date.now())
    }
  })
})

router.get('/:formName', authentication, (req, res) => {
  const {user} = res.locals
  user.form(req.params.formName).then(form => res.json(form))
})

router.post('/:formName', authentication, upload.single(), validate(), (req, res, next) => {
  const {user} = res.locals
  new Form({user_id: user.id, [req.params.formName]: JSON.stringify(req.body)}).save().then(form => {
    upload.dest = `uploads/form/${req.params.formName}/${user.id}`
    mkdirp.sync(upload.dest)
    res.json({success: true})
    next()
  })
}, upload.array('accidentPhotos'))

module.exports = router
