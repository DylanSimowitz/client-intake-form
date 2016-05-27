var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/../client'));

app.get('/', function(req, res) {
  res.send('Hello World!');
})

app.post('/post', function(req, res) {
  res.send(req.body);
})


app.listen(3000);
