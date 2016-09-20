import path from 'path'
import fs from 'fs'
import express from 'express'
import jwt from 'jsonwebtoken'
import Client from '../../database/models/Client.js'
import bcrypt from 'bcrypt'
import bodyParser from 'body-parser'

const router = express.Router()

router.post('/', bodyParser.json(), (req, res, next) => {
  const {email, password} = req.body
  Client.query({
    where: { email },
  }).fetch().then(client => {
    if (client) {
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
    else {
      res.status(401).json({_error: 'Invalid credentials'})
    }
  })
})

module.exports = router
