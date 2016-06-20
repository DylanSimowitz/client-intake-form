
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer')
var upload = multer();

var app = express();
let router = express.Router();

if (process.env.NODE_ENV === 'development') {
  var webpack = require('webpack');
  var webpackConfig = require('../webpack.config');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      historyApiFallback: true,
      stats: {
        colors: true
      }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/../client'));

app.post('/client', function(req, res) {
  console.log(req.body);
  res.send('OK')
})


app.listen(process.env.PORT || 3000);
