import bookshelf from '../bookshelf'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Form from './Form'

class User extends bookshelf.Model {
  get tableName() {return 'users'}
  get hasTimestamps() {return true}

  form = (name) => {
    return this.hasOne('Form', 'user_id').fetch({columns: [name]})
  }

  generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
  }
  
  register = (password) => {
    const salt = bcrypt.genSaltSync(10)
    this.set('password_salt', salt)
    this.set('password_digest', bcrypt.hashSync(password, salt))
    return this.save()
  }
}
//
module.exports = bookshelf.model('User', User)
