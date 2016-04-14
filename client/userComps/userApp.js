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

var UserApp = React.createClass({
	render: function(){
		return (
			<div>
				<h1> I am a logged in user</h1>
			</div>
			)
	}
});

module.exports = UserApp;