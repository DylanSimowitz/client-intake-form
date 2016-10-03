import bookshelf from './bookshelf'

export default function createSchema() {
  bookshelf.knex.schema.hasTable('clients').then(exists => {
    if (!exists) {
      bookshelf.knex.schema.createTable('clients', table => {
        table.increments('id').primary()
        table.json('data')
        table.string('email').notNullable().unique()
        table.string('password_salt').notNullable()
        table.string('password_digest').notNullable()
        table.boolean('verified').notNullable().defaultTo(false)
        table.timestamps()
      }).then(()=>{})
    }
  }).then(() => {
    bookshelf.knex.schema.hasTable('forms').then(exists => {
      if (!exists) {
        bookshelf.knex.schema.createTable('forms', table => {
          table.integer('client').references('id').inTable('clients')
          table.json('questionnaire')
          table.timestamps()
        }).then(()=>{})
      }
    })
  })
}
