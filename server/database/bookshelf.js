import connection from './connection'
import Bookshelf from 'bookshelf'

let bookshelf = new Bookshelf(connection)

bookshelf.plugin('registry')

export default bookshelf
