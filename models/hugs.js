var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Hug = new Schema ({
	title: String,
	content: String,
	duration: String,
	date: { type: Date, default: Date.now},
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]

});

module.exports = mongoose.model('Hug', Hug);