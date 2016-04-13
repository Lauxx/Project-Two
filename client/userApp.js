//	HugApp
//	   NavBar
//	   UserAuth
//	   UserApp
//	   HomePage(Logo/Carousel/Quotes)
//	   UserData
//		 UserDisplayCard
//	   	 UserFormData
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
var UserLoginFormData = require('./userComps/UserLoginFormData');

var UserApp = React.createClass({
	render: function(){
		return (
			<div>
				<UserLoginFormData login={ this.props.login } setActiveComponent={ this.props.setActiveComponent }/>
			</div>
			)
	}
});

module.exports = UserApp;