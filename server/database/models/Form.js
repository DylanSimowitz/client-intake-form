import bookshelf from '../bookshelf'

class Form extends bookshelf.Model {
  tableName = 'forms'
  hasTimestamps = true
}

module.exports = Form 
