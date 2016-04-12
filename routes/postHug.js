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


module.exports = router;