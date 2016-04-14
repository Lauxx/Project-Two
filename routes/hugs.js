var express = require('express');
var router = express.Router();
var Hug = require('../models/hugs');
var Comment = require('../models/comments');

//get- get everything; get one by id, put(update by id), delete(by id), post(generates its own id)

//localhost:8000/api/postHug
router.route('/hugs')
//this route gets all hug posts
	.get(function(req, res){
		Hug.find()
			.populate('user')
			.populate({
			path: 'comments',
			populate: {
				path: 'user',
				select: 'local.username',
			}
		})
			.exec(function(err, hugs){
			if (err){
				res.status(500).send(err, "Something broke on getting hug posts");
			} else {
				res.json(hugs)
			}
		});
	})
//this route will allow you to post a hug
	.post(function(req, res){

		var user_id = req.user ? req.user._id : "570ea44052aa641708ebb144";

		var hug = new Hug();

		hug.title = req.body.title;
		hug.content = req.body.content;
		hug.duration = req.body.duration;
		hug.user = req.user_id || "570ea44052aa641708ebb144";

		hug.save(function(err, hug){
			if(err){
				res.status(500).send(err, "Something broke on posting a hug");
			} else {
				res.json(hug)
			}
		});
	})

router.route('/hugs/:_id')
//this route will allow you find a single hug post by id
	.get(function(req, res){
		Hug.findById({_id: req.params._id})
		.populate({
			path: 'comments',
			populate: {
				path: 'user',
				select: 'local.username',
			}
		})
		.exec(function(err, post){
			if (err){
				res.status(500).send(err, "Something broke on getting single hug");
				
			} else {
				res.json(post)
			}
		});
	})

//this route will allow you to edit a hug post by id
	.put(function(req, res){
		Hug.findById({ _id: req.params._id }, function(err, update){
			if(err){
				res.status(500).send(err, "Something broke on PUTTING a single hug");
			} else {
				update.title = req.body.title ? req.body.title : update.title;
				update.content = req.body.content ? req.body.content : update.content;
				update.duration = req.body.duration ? req.body.duration : update.duration;

				update.save(function(err, hug){
					if (err){
						res.status(500).send(err, "Something broke on saving an update on a single hug");
					} else {
						res.json(hug)
					}
				})
			}
		});
	})

//this route will alow you to delete a single hug post
	.delete(function(req, res){
		Hug.remove({ _id: req.params._id }, function(err, hug){
			if(err){
				res.status(500).send(err, "Something broke on DELETING a single hug");
			} else {
				res.json({ message: 'hug post deleted!' })
			}
		});
	})

router.route('/hugs/:_id/comments')
	.post(function(req, res){
		
		var user_id = req.user ? req.user._id : "570ea44052aa641708ebb144";
		var comment = new Comment();

		comment.body = req.body.body;
		comment.user = user_id;
		comment.hug = req.params._id;

		console.log(comment);
		comment.save(function(err, comment){
			if(err){
				res.status(500).send(err, "Something broke on saving a comment");
			} else {
				Hug.findById(req.params._id, function(err, hug){
					if(err){
					 res.status(500).send(err, "Something broke on pushing a comment");	
					} else {
						hug.comments.push(comment);
						hug.save();
						res.json(hug);
					}
				})
			}
		});
	})

router.route('/hugs/comment/:comment_id')
	.get(function(req, res){
		Comment.findById( req.params.comment_id, function(err, comm){
			if (err){
				console.log(err)
			} else {
				res.json(comm)
			}
		});
	})


	.delete(function(req, res){
		Comment.remove({ _id: req.params.comment_id }, function(err, comm){
			if(err){
				res.status(500).send(err, "Something broke on DELETING a comment");
			} else {
				res.json({ message: 'deleted a comment'})
			}
		});
	})


module.exports = router;



