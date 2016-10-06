import bookshelf from '../bookshelf'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Form from './Form'

class Client extends bookshelf.Model {
  tableName = 'clients'
  hasTimestamps = true
  
  forms = () => {
    return this.hasOne(Form, 'client_id')
  }

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
