var mongoose = require('mongoose');
var User = require('../models/user');

// app/routes.js
module.exports = function(app, passport) {

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/', // redirect to the secure profile section
        failureRedirect: '/', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    //create new user in database, hands over to passport to do its encryption

    app.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('/', {
            message: req.flash('signupMessage')
        });
    });

    app.post('/login', passport.authenticate('local-login', {
       successRedirect: '/', // redirect to the secure profile section
       failureRedirect: '/', // redirect back to the signup page if there is an error
       failureFlash: true // allow flash messages
   }));

   app.get('/login', function(req, res) {
       // render the page and pass in any flash data if it exists
       res.render('/', {
           message: req.flash('loginMessage')
       });
   });

   app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/')
   });

   app.put('/api/user/:user_id', function(req, res){
      console.log("TRYING TO PUTTTTT!!!!")
        User.findById({_id: req.params.user_id}, function(err, user) {
          if(err) {
            console.log(err);
          } else {
            user.local.username = req.body.username ? req.body.username : user.local.username;
            user.local.profileImage = req.body.profileImage ? req.body.profileImage : user.local.profileImage;
            console.log("SUCCESS!!")
            user.save(function(err, update){
              if(err) {
                console.log(err)
              } else {
                res.json(update);
               
              }
            })
          }
        })
      
    });
};


