//	HugApp
//	   HomePage(Logo/Carousel/Quotes)
//	   UserData
//		UserApp
//		  UserDisplayCard
//	   	  UserFormData
//	       UserUpdateForm
//	     HugPostData
//		   HugPostForm	
//	   HugListData
//		 HugList
//		   HugCard
//			 CommentList
//			 CommentPostData
//				CommentPostForm
//		 Footer

var React = require('react');
var UserDisplayCard = require('./userDisplayCard');

var UserApp = React.createClass({
	render: function(){
		return (
			<div>
			<UserDisplayCard user={ this.props.user }/>
			</div>
			)
	}
});

module.exports = UserApp;