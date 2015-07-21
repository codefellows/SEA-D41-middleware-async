var app = require('express')();

var middleware = function(req, res, next) {
  console.log('hello from one');
  req.someval = 'wow, such value';
  next(); 
};

var middleware2 = function(req, res, next) {
  console.log('middleware2, this time it\'s personal');
  next();
};

app.use(function(req, res, next) {
  console.log('using middle ware');
  next();
});

app.get('/middleware', middleware, middleware2, function(req, res) {
  debugger;
  res.send('wow, so middle ware, such processing');
});

app.use(function(req, res, next) {
  console.log('second using');
  next();
});

app.get('/secondroute', middleware, middleware2, function(req, res) {
  res.send('another awesome route of awesomeness');
});
app.listen(3000, function() {
  console.log('server started');
});
