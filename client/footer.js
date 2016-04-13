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

var Footer = React.createClass({
	render: function(){
		return (
		<div>
			<div className="navbar footer navbar-fixed-bottom">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Title</a>
					<ul className="nav navbar-nav">
						
					</ul>
				</div>
			</div>
			</div>
			)
	}
});

module.exports = Footer;