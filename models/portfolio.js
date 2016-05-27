var mongoose = require('mongoose');
var schema = mongoose.Schema;

//create portfolio model
var Portfolio = new schema({
	title: String,
	pageUrl: String,
	description: String,
	gitHub: String,
	url: String,
	img: String
});

//make public
module.exports = mongoose.model("Portfolio", Portfolio);