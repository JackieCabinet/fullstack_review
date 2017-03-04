var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoURI = "mongodb://jackie:password@ds113680.mlab.com:13680/furniture";
mongoose.connect(mongoURI, function(err){
	if(err){
		console.log("Error: failed connection", err)
	} else {
		console.log("Success: connected to the db")
	}
});

var db = mongoose.connection;

module.exports=db;
