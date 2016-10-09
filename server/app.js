import express from 'express'
import path from 'path'
import router from './router'

const app = express()

// DEVELOPMENT MIDDLEWARE //
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const DashboardPlugin = require('webpack-dashboard/plugin')

  compiler.apply(new DashboardPlugin())

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    quiet: true,
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }))
  app.use(webpackHotMiddleware(compiler))
}
const staticPath = path.resolve(__dirname, '../public')
app.use(express.static(staticPath))
app.listen(process.env.PORT || 3000)
app.use('/api', router)
app.get('*', (req, res) => res.sendFile(staticPath + '/index.html'))
export default app
