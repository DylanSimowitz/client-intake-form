import express from 'express'
import User from '../../database/models/User'
import Form from '../../database/models/Form'
import bodyParser from 'body-parser'
import validate from '../middleware/validate'
import verificationEmail from '../middleware/verification'

const router = express.Router()

router.post('/', bodyParser.json(), validate('register'), (req, res, next) => {
  let {first_name, last_name, email, password} = req.body
  res.status(409).json({_error: 'Registration is disabled in demo'})
})

module.exports = router
