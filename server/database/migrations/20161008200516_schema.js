
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('email').notNullable().unique()
      table.enu('role', ['admin', 'client']).defaultTo('client')
      table.boolean('verified').notNullable().defaultTo(false)
      table.string('password_salt').notNullable()
      table.string('password_digest').notNullable()
      table.timestamps()
    }),
    knex.schema.createTable('forms', table => {
      table.integer('user_id').primary()
      table.foreign('user_id').references('id').inTable('users')
      table.json('questionnaire').defaultTo('{}')
      table.timestamps()
    })
  ])  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('forms'),
    knex.schema.dropTable('users')
  ]) 
};
