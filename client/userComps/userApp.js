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
var UserDisplayCard = require('./userDisplayCard');
var UserUpdateFormData = require('./userUpdateFormData');

var UserApp = React.createClass({
	render: function(){
		return (
			<div>
			<UserDisplayCard user={ this.props.user }/>
			<UserUpdateFormData user={ this.props.user } getCurrentUserFromServer={ this.props.getCurrentUserFromServer }/>
			</div>
			)
	}
});

module.exports = UserApp;