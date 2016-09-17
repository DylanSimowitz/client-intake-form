import bookshelf from './bookshelf'

export default function createSchema() {
bookshelf.knex.schema.createTableIfNotExists('clients', table => {
  table.increments('id').primary()
  table.json('data')
  table.timestamps()
}).then(()=>{})
}
