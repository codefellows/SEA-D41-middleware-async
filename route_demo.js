var app = require('express')();

app.get('/called*', function(req, res) {
  res.send('this will match\n');
  res.send('antoher send');
});

app.get('*', function(req, res) {
  res.send('this catches everything\n');
});


app.get('/never', function(req, res) {
  res.send('we\'ll never see this\n');
});

app.listen(3000, function() {
  console.log('server up');
});
