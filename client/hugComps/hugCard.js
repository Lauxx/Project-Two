//	HugApp
//	   NavBar
//	   UserAuth
//	   UserApp
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
//		 Footer

var React = require('react');

var CommentList = require('./commentList');

var CommentPostData = require('./commentPostData');

var HugCard = React.createClass({

	render: function(){
		return (
			<div>
				<div className="container">
				  <p>{this.props.user.local.username}</p>
					<p>{this.props.title}</p>
					<p>{this.props.content}</p>
					<p>{this.props.duration}</p>
					<CommentList comments={this.props.comments}/>
					<CommentPostData />
				</div>
			</div>
			)
	}
});

module.exports = HugCard;