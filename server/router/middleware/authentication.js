import jwt from 'jsonwebtoken'
import User from '../../database/models/User'

export default (req, res, next) => {
  const authorizationHeader = req.headers['authorization']
  let token

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1]
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({error: 'Failed to authenticate'})
      }
      else {
        User.query({
          where: {id: decoded.id}
        })
        .fetch({require: true}).then(user => {
          res.locals.user = user 
          next()
          return user
        })
        .catch(User.NotFoundError, () => res.status(404).redirect('/'))
      }
    })
  }
  else {
    res.json({error: 'Your session is expired'})
  }
}
