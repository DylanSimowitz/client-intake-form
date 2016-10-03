import express from 'express'
import Client from '../../database/models/Client.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.get('/', (req, res) => {
  const {token} = req.query
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.end('Your token is invalid')
    }
    else {
      Client.where({email: decoded.email}).fetch({require: true}).then(client => {
        client.set('verified', true).save().then(() => res.redirect('/login')) 
      })
        .catch(Client.NotFoundError, () => res.status(400).redirect('/'))
    }
  })
})

module.exports = router
