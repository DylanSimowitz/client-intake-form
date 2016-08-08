module.exports = function(app, req, res, next) {
  app.use('/clients', (req, res, next) => {
    require('./routes/clients')(req, res, next)
  })
}
