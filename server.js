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

var Hug = require('./models/hugs');
var hugRouter = require('./routes/hugs');
var User = require('./models/user');
var userRouter = require('./routes/user_route');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



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
  

app.get('/', function (req, res){
	var user = req.user || " ";
	res.render('index', {user: user});
});

app.get('/huggApp', function (req, res){
	var userr = req.user || " ";
	console.log(userr, 'hello i am the user');
	res.render('huggApp', {user: userr});
});

app.use('/api', userRouter);
app.use('/api', hugRouter);
app.listen(port);
console.log('winning on ' + port);