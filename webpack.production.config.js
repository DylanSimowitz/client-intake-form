var webpack = require('webpack')
var path = require('path')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV) 
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({

      beautify: false,
        mangle: { screw_ie8 : true, keep_fnames: true },
        compress: { screw_ie8: true, warnings: false },
        comments: false,

      output: {
        comments: false
      }
    })
  ],
  node: {
    net: 'empty',
    dns: 'empty'
  },
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public')
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve('./client')]
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
      }, {
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
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
}
