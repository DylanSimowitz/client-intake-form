exports.up = function(knex, Promise) {
  return knex('clients').truncate()  
}

exports.down = function(knex, Promise) {
  return null
}
