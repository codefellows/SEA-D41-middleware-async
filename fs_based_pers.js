var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs');

var app = express();

app.post('/:filename', function(req, res) {
  var file = fs.createWriteStream(__dirname + '/saved/' + req.params.filename + '.json');
  req.pipe(file);
  res.send('saved');
});

app.listen(3000, function() {
  console.log('server running');
});
