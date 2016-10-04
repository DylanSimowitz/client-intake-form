import bookshelf from '../bookshelf'
import bcrypt from 'bcrypt-nodejs'
import jwt from 'jsonwebtoken'

class Client extends bookshelf.Model {
  tableName = 'clients'
  hasTimestamps = true

  generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
  }
  

  register = (email, password) => {
    const salt = bcrypt.genSaltSync(10)
    this.attributes = {
      email,
      password_salt: salt,
      password_digest: bcrypt.hashSync(password, salt)
    }
    return this.save()
  }
}

module.exports = Client
