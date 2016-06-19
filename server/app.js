var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer')
var upload = multer();

var app = express();
let router = express.Router();


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/../client'));

app.post('/client', function(req, res) {
  console.log(req.body);
  res.send('OK')
})


app.listen(3000);
