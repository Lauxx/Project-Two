var express = require('express');
var router = express.Router();
var PostHug = require('../models/postHug');
var Comments = require('../models/comments');

//get- get everything; get one by id, put(update by id), delete(by id), post(generates its own id)

//localhost:8000/api/postHug
router.route('/hugs')
//this route gets all hug posts
	.get(function(req, res){
		PostHug.find(function(err, hug){
			if(err){
				console.log(err)
			} else {
				res.json(hug)
			}
		});
	})
//this route will allow you to post a hug
	.post(function(req, res){
		var user_id = req.user ? req.user._id : "570c291724367ecc202e5d61";
		var hug = new PostHug();

		hug.title = req.body.title;
		hug.content = req.body.content;
		hug.duration = req.body.duration;
		hug.user = req.user_id || "570c291724367ecc202e5d61";

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
		PostHug.findById({ _id: req.params._id }, function(err, hug){
			if(err){
				res.status(500).send(err, "Something broke on getting a single hug");
			} else {
				res.json(hug)
			}
		});
	})

//this route will allow you to edit a hug post by id
	.put(function(req, res){
		PostHug.findById({ _id: req.params._id }, function(err, update){
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




module.exports = router;



