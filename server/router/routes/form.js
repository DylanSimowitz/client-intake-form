import express from 'express'
import User from '../../database/models/User'
import Form from '../../database/models/Form'
import multer from 'multer'
import authentication from '../middleware/authentication'
import mkdirp from 'mkdirp'
import validate from '../middleware/validate'

function adminOrLoggedIn(req, res, next) {
  const {id} = req.params
  const {user} = res.locals

  if (user.get('id') == id || user.get('role') === 'admin') {
    next()
  }
  else {
    res.status(401).json({error: 'Unauthorized'})
  }
} 

const router = express.Router({mergeParams: true})
const upload = multer({
  dest: 'uploads',
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      cb(null, file.originalname + Date.now())
    }
  })
})

router.get('/:formName', authentication, adminOrLoggedIn, (req, res) => {
  const {id, formName} = req.params
  new User({id}).form(formName).then(form => res.json(form.get('questionnaire')))
})

router.post('/:formName', authentication, adminOrLoggedIn, upload.single(), validate(), (req, res, next) => {
  const {user} = res.locals
  const {id, formName} = req.params

  new Form({user_id: id, [formName]: JSON.stringify(req.body)}).save().then(form => {
    upload.dest = `uploads/form/${req.params.formName}/${user.id}`
    mkdirp.sync(upload.dest)
    next()
  })
}, upload.array('accidentPhotos'), (req, res) => res.json({success: true}))

module.exports = router
