import express from 'express'
import clientRoutes from './routes/clients'
import authRoutes from './routes/auth'
import registerRoutes from './routes/register'

const router = express.Router()
router.use('/clients', clientRoutes)
router.use('/auth', authRoutes)
router.use('/register', registerRoutes)
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
