exports.up = function(knex, Promise) {
  return knex.schema.table('forms', table => {
    table.renameColumn('client', 'client_id')  
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('forms', table => {
    table.renameColumn('client_id', 'client')  
  })
}
