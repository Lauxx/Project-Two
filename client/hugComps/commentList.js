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

function CommentList(props){
	var comments = props.comments.map(function(comm){
		var user = comm.user && comm.user.local ? comm.user.local.username : 'no user';
		return (
			<div>
				<p>{comm.body}</p>
				<p>{comm.date}</p>
				<p>{user}</p>
			</div>
			)
	})
		return (
			<div>
				{comments}
			</div>
			)
	};

module.exports = CommentList;