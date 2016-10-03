import jwt from 'jsonwebtoken'
import Client from '../../database/models/Client'

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
        Client.query({
          where: {id: decoded.id},
          select: ['email', 'id']
        })
        .fetch({require: true}).then(client => {
          res.locals.client = client
          next()
        })
        .catch(Client.NotFoundError, () => res.status(404).redirect('/'))
      }
    })
  }
  else {
    res.json({error: 'Your session is expired'})
  }
}
