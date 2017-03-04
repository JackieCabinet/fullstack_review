var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
var app = express();
var db = require('./db/config')
var ctrl = require('./controllers/inventory');
//var mod = require('./models');


//middleware
app.use('/', express.static('../client')); //serve the static files in client directory, which is where I have index.html
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

//routes
app.get('/api/inventory', ctrl.get);
app.post('/api/inventory', ctrl.post);

//run server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})