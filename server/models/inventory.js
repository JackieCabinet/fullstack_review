var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var inventorySchema = new Schema({
	category: String,
	brand: String,
	design: String,
	image: String,
	description: String,
	date: {type: Date, default: Date.now}
})

var Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;