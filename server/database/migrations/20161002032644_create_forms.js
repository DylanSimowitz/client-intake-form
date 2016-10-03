exports.up = function(knex, Promise) {
  return knex.schema.createTable('forms', table => {
    table.integer('client').references('id').inTable('clients')
    table.json('questionnaire')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('forms') 
}
