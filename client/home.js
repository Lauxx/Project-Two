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

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container jumbotron">
				    <h1> Hug someone today! </h1>
				</div>
			</div>
		)
	}
});

module.exports = Home;