//	HugApp
//	   HomePage(Logo/Carousel/Quotes)
//	   UserData
//		 UserApp
//		   UserDisplayCard
//	   	   UserFormData
//	        UserUpdateForm
//	      HugPostData
//		    HugPostForm	
//	   HugListData
//		 HugList
//		   HugCard
//			 CommentList
//			 CommentPostData
//				CommentPostForm
//		 Footer

var React = require('react');
var UserApp = require('./userApp');

var UserData = React.createClass({
	getInitialState: function(){
		return {
			user: null
		}
	},

	getCurrentUserFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/user',
			method: 'GET'
		}).done(function(data){
			self.setState({ user: data })
		})
	},

	componentDidMount: function(){
		this.getCurrentUserFromServer();
	},


	render: function(){
		return this.state.user ?  <UserApp user={ this.state.user } getCurrentUserFromServer={this.getCurrentUserFromServer}/> : null
	}
});

module.exports = UserData;

