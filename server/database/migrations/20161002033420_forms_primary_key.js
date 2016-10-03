
exports.up = function(knex, Promise) {
  return knex.schema.table('forms', table => {
    table.primary('client')
  }) 
}

exports.down = function(knex, Promise) {
  return knex.schema.table('forms', table => {
    table.dropPrimary()
  })
}
