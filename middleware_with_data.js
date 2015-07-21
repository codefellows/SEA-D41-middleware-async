var app = require('express')();

var greet = function(greeting) {
  return function(req, res, next) {
    req.name = req.params.name.toUpperCase();
    req.greeting = greeting;
    next();
  };
};

var endFunc = function(req, res) {
  res.send(req.greeting + req.name);
};

app.get('/hello/:name', greet('hello '), endFunc);

app.get('/goodbye/:name', greet('goodbye '), endFunc);

app.listen(3000, function() {
  console.log('server started');
});
