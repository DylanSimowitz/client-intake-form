import bookshelf from '../bookshelf'

class Client extends bookshelf.Model {
  tableName = 'clients'
  hasTimestamps = true
}

module.exports = Client
