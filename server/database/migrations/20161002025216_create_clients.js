exports.up = function(knex, Promise) {
  return knex.schema.createTable('clients', table => {
    table.increments('id').primary()
    table.string('email').notNullable().unique()
    table.boolean('verified').notNullable().defaultTo(false)
    table.string('password_salt').notNullable()
    table.string('password_digest').notNullable()
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clients') 
}
