import express from 'express'
import User from '../../database/models/User.js'
import bodyParser from 'body-parser'
import validate from '../middleware/validate'
import verificationEmail from '../middleware/verification'

const router = express.Router()

router.post('/', bodyParser.json(), validate('register'), (req, res, next) => {
  const {first_name, last_name, email, password} = req.body
  new User({first_name, last_name, email}).register(password)
    .then(user => {
      res.locals.email = user.get('email') 
      next()
    })
    .catch(error => {
      res.status(409).json({email: 'Email already registered', _error: 'Correct all marked fields'})
    })
}, verificationEmail)

module.exports = router
