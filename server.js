var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
var app = express();
var ctrl = require('./controllers');
var mod = require('./models');


//middleware
app.use(express.static('./')) //serve the static files in root directory, which is where I have index.html
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

//routes

//run server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})