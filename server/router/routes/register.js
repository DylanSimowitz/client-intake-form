import express from 'express'
import Client from '../../database/models/Client.js'
import bcrypt from 'bcrypt'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/', bodyParser.json(), (req, res, next) => {
  const {email, password} = req.body
  Client.query({
    where: { email },
  }).fetch().then(client => {
    if (client) {
      res.status(409).json({email: 'Email already in use', _error: 'Please fix all errors and try again'})
    }
    else {
      const salt = bcrypt.genSaltSync(10)
      Client.forge({
        email,
        password_salt: salt,
        password_digest: bcrypt.hashSync(password, salt)
      }).save().then(client => {
        const token = jwt.sign({
          id: client.get('id'),
        }, process.env.JWT_SECRET)
        res.json({token})
      }).catch(err => res.status(500).json({_error: err}))
    }
  })
})

module.exports = router
