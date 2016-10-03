import express from 'express'
import Client from '../../database/models/Client.js'
import bodyParser from 'body-parser'
import ValidateMiddleware from '../middleware/validate'
import verificationEmail from '../middleware/verification'

const validator = new ValidateMiddleware('register')
const router = express.Router()

router.post('/', bodyParser.json(), validator.validate, (req, res, next) => {
  const {email, password} = req.body
  Client.forge().register(email, password)
    .then(client => {
      res.locals.email= client.get('email')
      next()
    })
    .catch(error => {
      console.log(error)
      res.status(409).json({email: 'Email already registered', _error: 'Correct all marked fields'})
    })
}, verificationEmail)

module.exports = router
