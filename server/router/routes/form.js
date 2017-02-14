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

  if (user.id == id || user.role === 'admin') {
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
  res.json({})
})

router.post('/:formName', authentication, adminOrLoggedIn, validate(), (req, res, next) => {
  const {id, formName} = req.params
  res.json({success: true})
})

module.exports = router
