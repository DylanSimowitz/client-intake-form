import express from 'express'

const app = express()

// DEVELOPMENT MIDDLEWARE //
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const chokidar = require('chokidar');
  // import webpack from 'webpack'
  // import webpackConfig from '../webpack.config'
  // import webpackDevMiddleware from 'webpack-dev-middleware'
  // import webpackHotMiddleware from 'webpack-hot-middleware'
  // import chokidar from ('chokidar')
  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      historyApiFallback: true,
      stats: {
        colors: true
      }
  }));
  app.use(webpackHotMiddleware(compiler));

  const watcher = chokidar.watch(__dirname + '/router')
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log("Clearing /router/ module cache from server")
      Object.keys(require.cache).forEach(function(id) {
        if (/[\/\\]server[\/\\]router[\/\\]/.test(id)) delete require.cache[id]
      })
    })
  })
}
app.use(express.static('public'))
app.listen(process.env.PORT || 3000);
app.use((req, res, next) => {
  require('./router')(app, req, res, next)
  next()
})

export default app
