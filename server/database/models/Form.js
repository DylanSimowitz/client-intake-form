import bookshelf from '../bookshelf'
import User from './User'

class Form extends bookshelf.Model {
  get tableName() {return 'forms'}
  get hasTimestamps() {return true}
  get idAttribute() {return 'user_id'}

  user = () => {
    return this.belongsTo('User', 'user_id')
  }
}

module.exports = bookshelf.model('Form', Form)
