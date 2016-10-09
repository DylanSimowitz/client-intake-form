import express from 'express'
import formRoutes from './routes/form'
import authRoutes from './routes/auth'
import registerRoutes from './routes/register'
import verifyRoutes from './routes/verify'
import userRoutes from './routes/users'

const router = express.Router()
router.use('/form', formRoutes)
router.use('/auth', authRoutes)
router.use('/register', registerRoutes)
router.use('/verify', verifyRoutes)
router.use('/users', userRoutes)
//module.exports = function(app, req, res, next) {
  //app.use('/clients', (req, res, next) => {
    //require('./routes/clients')(req, res, next)
    //next()
  //})
  //app.use('/auth', (req, res, next) => {
    //require('./routes/auth')(req, res, next)
    //next()
  //})
//}
export default router
