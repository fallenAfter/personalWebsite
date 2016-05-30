var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

//create account schema
var Account = new schema({
	username: String,
	password: String
});

Account.plugin(passportLocalMongoose);
module.exports = mongoose.model('Account', Account);