import express from 'express'
import jwt from 'jsonwebtoken'
import Client from '../../database/models/Client.js'
import bcrypt from 'bcrypt-nodejs'
import bodyParser from 'body-parser'
import ValidateMiddleware from '../middleware/validate'

const validation = new ValidateMiddleware('login')

const router = express.Router()

router.post('/', bodyParser.json(), validation.validate, (req, res, next) => {
  const {email, password} = req.body
  Client.query({
    where: { email },
  }).fetch({require: true}).then(client => {
    if (client.get('verified') === false) {
      res.status(400).json({_error: 'Email not yet verified'})
    }
    else {
      if (bcrypt.hashSync(password, client.get('password_salt')) === client.get('password_digest')) {
        const token = jwt.sign({
          id: client.get('id'),
        }, process.env.JWT_SECRET)
        res.json({token})
      }
      else {
        res.status(401).json({_error: 'Invalid credentials'})
      }
    }
  })
    .catch(Client.NotFoundError, () => res.status(401).json({_error: 'Invalid credentials'}))
})

module.exports = router
