import bookshelf from '../bookshelf'
import User from '../models/User'

class Users extends bookshelf.Collection {
  get model() {return User}

  clients = () => {
    return this.query({where: {role: 'client'}}).orderBy('last_name', 'asc').fetch({columns: ['id', 'first_name', 'last_name']})
  }
}

module.exports = Users 
