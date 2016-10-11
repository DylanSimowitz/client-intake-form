import express from 'express'
import User from '../../database/models/User'
import Users from '../../database/collections/Users'
import authentication from '../middleware/authentication'
import formRoutes from './form'

const router = express.Router({mergeParams: true})

function isAdmin(req, res, next) {
  const {user} = res.locals
  if (user.get('role') === 'admin') {
    next()
  }
  else {
    res.status(401).json({error: 'Unauthorized request'})
  }
}

router.get('/clients', authentication, isAdmin, (req, res) => {
  new Users().clients().then(clients => res.json(clients))
})

router.get('/:id', authentication, isAdmin, (req, res) => {
  new User({id: req.params.id}).fetch().then(model => {
    res.locals.selectedClient = model
    res.json(model)
  }) 
})

router.delete('/:id', authentication, isAdmin, (req, res) => {
  new User({id: req.params.id}).destroy().then(model => {
    res.json({success: 'Successfully deleted client'})
  }) 
})

router.use('/:id/form', formRoutes)



module.exports = router
