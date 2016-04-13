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
//	   Footer	

var React = require('react');

var Footer = React.createClass({
	render: function(){
		return (
			<div>
			<nav className="navbar navbar-default navbar-fixed-bottom" role="navigation">
				<div className="container">
					<a className="navbar-brand" href="#">Title</a>
					<ul className="nav navbar-nav">
						<li className="">
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Link</a>
						</li>
					</ul>
				</div>
			</nav>
			</div>
			)
	}
});

module.exports = Footer;