if (process.env.NODE_ENV === 'development') {
  var path = require('path')
  require('dotenv').config({path: path.resolve(__dirname, '../../.env')})
}
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL 
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL 
  },
}
