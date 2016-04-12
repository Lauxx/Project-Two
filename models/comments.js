var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	body: String, 
	date: { type: Date, default: Date.now},
	hugPost: { type: mongoose.Schema.Types.ObjectId, ref: 'Hug' },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Comment', CommentSchema);