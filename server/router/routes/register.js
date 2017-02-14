import express from 'express'
import bodyParser from 'body-parser'
import validate from '../middleware/validate'

const router = express.Router()

router.post('/', bodyParser.json(), validate('register'), (req, res, next) => {
  let {first_name, last_name, email, password} = req.body
  res.status(409).json({_error: 'Registration is disabled in demo'})
})

module.exports = router
