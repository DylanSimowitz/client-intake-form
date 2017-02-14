import express from 'express'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser'
import validate from '../middleware/validate'


const router = express.Router()

router.post('/', bodyParser.json(), validate('login'), (req, res, next) => {
  let {email, password} = req.body
  email = email.toLowerCase()
  if (password === 'password' && email === 'demo@simowitz.com') {
    const token = jwt.sign({
      id: 1,
      role: 'client'
    }, process.env.JWT_SECRET, {expiresIn: '7d'})
    res.json({token})
  }
  else {
    res.status(401).json({_error: 'Invalid credentials'})
  }
})

module.exports = router
