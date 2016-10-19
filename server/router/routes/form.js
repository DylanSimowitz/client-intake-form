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
const upload = multer({})

function setUploadDestination(req, res, next) {
  const {user} = res.locals
  
  const dest = `uploads/form/${req.params.formName}/${user.id}`

  upload.storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, dest) 
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname.split('.')[0]}-${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
  })
  mkdirp.sync(dest)
  next()
}

router.get('/:formName', authentication, adminOrLoggedIn, (req, res) => {
  const {id, formName} = req.params
  new User({id}).form(formName).then(form => res.json(form.get('questionnaire')))
})

router.post('/:formName', authentication, adminOrLoggedIn, setUploadDestination, upload.any(), validate(), (req, res, next) => {
  const {id, formName} = req.params

  new Form({user_id: id, [formName]: req.body}).save().then(form => {
    res.json({success: true})
  })
})

module.exports = router
