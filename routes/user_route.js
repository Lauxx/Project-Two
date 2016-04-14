var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');


//localhost:8000/api/user
router.route('/user')
	.get(function(req, res) {

   	if(req.user) {
     console.log(req.user)
     mongoose.model('User').findById({
         _id: req.user._id
       },
       function(error, user) {
         if (error) {
           return console.log(error);
         } else {
           res.json(user)
         }
       });
   } else {
     res.json(null)
   }
})

module.exports = router;