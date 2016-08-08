import knex from 'knex'
const connection = knex({
  client: 'pg',
  connection: {
    host     : 'localhost',
    port     : '32768',
    user     : 'postgres',
    password : 'password',
    database : 'postgres',
    charset  : 'utf8'
  }
});

export default connection
