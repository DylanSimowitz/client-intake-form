import express from 'express'
import User from '../../database/models/User.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.get('/', (req, res) => {
  const {token} = req.query
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(400).json({error: 'Your token is invalid'})
    }
    else {
      User.where({email: decoded.email}).fetch({require: true}).then(user => {
        user.set('verified', true).save().then(() => res.status(302).redirect('/login')) 
      })
        .catch(User.NotFoundError, () => res.status(400).redirect('/'))
    }
  })
})

module.exports = router
