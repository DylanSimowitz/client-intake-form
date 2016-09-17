import knex from 'knex'
const connection = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  //connection: {
    //host     : 'process.env.DB_HOST',
    //port     : 'process.env.DB_PORT',
    //user     : 'process.env.DB_USER',
    //password : 'process.env.DB_PASSWORD',
    //database : 'postgres',
    //charset  : 'utf8'
  //}
});

export default connection
