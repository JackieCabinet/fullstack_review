var Inventory = require('../models/inventory');

module.exports = {
	get: function(req, res){
		console.log('in inventory get')
		Inventory.find(function(err, inventory){
			if(err){
				return handleError(err);
			}
			if(inventory){
				res.json(inventory)
			}
		})
	},
	post: function(req, res){
		console.log('in inventory post')
		var inventory = new Inventory ({
			category: req.body.category,
			brand: req.body.brand,
			design: req.body.design,
			description: req.body.description,
			date: req.body.date
		})
		console.log(req.body);
		inventory.save(function(err){
			if(err){
				throw(err);
			} else {
				console.log("this fires after the post")
			}
		}).then(function(arg){
			res.send("success post");
		})
	}
}