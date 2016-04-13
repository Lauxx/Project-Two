//	HugApp
//	   NavBar
//	   UserAuth
//	   HomePage(Logo/Carousel/Quotes)
//	   UserData
//		 UserDisplayCard
//	   UserFormData
//	     UserUpdateForm
//	   HugPostData
//		 HugPostForm	
//	   HugListData
//		 HugList
//		   HugCard
//			 CommentList
//			 CommentPostData
//				CommentPostForm
//	   Footer

var React = require('react');

var UserAuth = React.createClass({
	getInitialState: function(){
		return {
			user: null
		}
	},

	propTypes: {
    	children: React.PropTypes.node.isRequired
    },

    childContextTypes: {
    	user: React.PropTypes.object,
    	signUp: React.PropTypes.func,
    	logIn: React.PropTypes.func,
    	logOut: React.PropTypes.func
    },

    getChildContext: function() {
    	return {
    			user: this.state.user,
    			signUp: this.signUp,
    			logIn: this.logIn,
    			logOut: this.logOut
    		}
    },

    signUp: function(email, username, password, profileImage){
    	var userData = {
    		email: email.trim(),
    		password: password.trim(),
    		username: username.trim(),
    		profileImage: profileImage.trim()
    	};


    	var self = this;
    	$.ajax({
    		url: '/signup',
    		method: 'POST',
    		data: userData
    	}).done(function(data){
    		self.setState({ user: data.user });
    		alert('You Signed Up successfully');
    	})
    },

    logIn: function(email, password){
    	var userData = {
    		email: email.trim(),
    		password: password.trim()
    	};

    	var self = this;
    	$.ajax ({
    		url: '/login', 
    		method: 'POST',
    		data: userData
    	}).done(function(data){
    		self.setState({ user: data.user });
    		alert('You logged in successfully');
    	})
    },

    logOut: function(email, password){
    	var self = this;
    	$.ajax({
    		url: '/logout',
    		method: 'GET'
    	}).done(function(data){
    		self.setState({ user: null })
    	})
    },

	render: function(){
		return this.props.children
	}
});

module.exports = UserAuth