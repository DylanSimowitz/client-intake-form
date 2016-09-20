import webpack from 'webpack'
import path from 'path'
module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()
  ],
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './client/index.js'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: __dirname
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve('./client'), path.resolve('./')]
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: './src',
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        loaders: [
          'babel-loader'
        ]
      }
            , {
              test: /\.css$/,
              loader: 'style-loader!css-loader?modules',
              exclued: /flexboxgrid/
            }, {
              test: /\.sass/,
              loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
            }, {
              test: /\.scss/,
              loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            }, {
              test: /\.less/,
              loader: 'style-loader!css-loader!less-loader'
            }, {
              test: /\.styl/,
              loader: 'style-loader!css-loader!stylus-loader'
            }, {
              test: /\.(png|jpg|gif|woff|woff2|ttf|eot)$/,
              loader: 'url-loader?limit=8192'
            }
    ]
  }
}
