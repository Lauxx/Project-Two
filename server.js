var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
mongoose.connect('mongodb://localhost/hugApp');
var port = process.env.PORT || 8000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res){
	var user = req.user || " ";
	res.render('index', {user: user});
});

app.get('/huggApp', function (req, res){
	var user = req.user || " ";
	res.render('huggApp', {user: user});
});

//new stuff for authentication; configuring out app to tell it to use passport
app.use(session({
 secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
app.use(flash());

require('./config/passport')(passport);
// routes ======================================================================
require('./routes/user.js')(app, passport);

app.use(function(req, res, next){
	var user = req.user || 'no user';
	console.log(user);
	next();
});



app.listen(port);
console.log('winning on ' + port);