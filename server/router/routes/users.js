import express from 'express'
import User from '../../database/models/User'
import Users from '../../database/collections/Users'
import authentication from '../middleware/authentication'
import formRoutes from './form'

const router = express.Router()

router.get('/clients', authentication, (req, res) => {
  const {user} = res.locals
  if (user.get('role') === 'admin') {
    new Users().clients().then(clients => res.json(clients))
  }
  else res.status(400).json({error: 'Unauthorized request'})
})

router.get('/:id', authentication, (req, res) => {
  const {user} = res.locals
  if (user.role === 'admin') {
    new User({id: req.params.id}).fetch().then(model => {
      res.locals.selectedClient = model
      res.json(model)
    }) 
  }
  else {
    res.status(400).json({error: 'Unauthorized request'})
  }
})

//router.use('/:id', formRoutes)



module.exports = router
