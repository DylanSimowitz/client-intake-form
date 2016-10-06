import bookshelf from '../bookshelf'
import Client from './Client'

class Form extends bookshelf.Model {
  tableName = 'forms'
  hasTimestamps = true
  idAttribute = 'client_id'

  client = () => {
    return this.belongsTo(Client, 'client_id')
  }
}

module.exports = Form 
