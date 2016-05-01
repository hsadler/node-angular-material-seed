
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/routes')(app, express);

var port = process.env.PORT || 8080;
var node_env = process.env.NODE_ENV || 'development';


app.use(express.static(__dirname + '/../dist'));
app.use(express.static(__dirname + '/../client/src'));
app.use(express.static(__dirname + '/../client/assets'));
app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

if (require.main === module) {
  app.listen(port);
  console.log('listening on ' + port);
  console.log('app listening on port: ' + port + ' in ' + node_env + ' mode.');
}

