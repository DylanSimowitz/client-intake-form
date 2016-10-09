import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../../database/models/User'
import bcrypt from 'bcrypt'
import bodyParser from 'body-parser'
import validate from '../middleware/validate'


const router = express.Router()

router.post('/', bodyParser.json(), validate('login'), (req, res, next) => {
  const {email, password} = req.body
  User.query({
    where: { email },
  }).fetch({require: true}).then(user => {
    if (user.verified === false) {
      res.status(400).json({_error: 'Email not yet verified'})
    }
    else {
      if (bcrypt.hashSync(password, user.get('password_salt')) === user.get('password_digest')) {
        const token = jwt.sign({
          id: user.get('id'),
          role: user.get('role')
        }, process.env.JWT_SECRET)
        res.json({token})
      }
      else {
        res.status(401).json({_error: 'Invalid credentials'})
      }
    }
  })
    .catch(User.NotFoundError, () => res.status(401).json({_error: 'Invalid credentials'}))
})

module.exports = router
