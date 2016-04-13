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

var CommentList = require('./commentList');

var CommentPostData = require('./commentPostData');

var HugCard = React.createClass({

	render: function(){
		return (
			<div>
				<div className="container jumbotron col-xs-6">
					<div className="completeHugPost">
				  		<p><b>@{this.props.user.local.username}</b></p>
						<p>Describe your hug: {this.props.title}</p>
						<p>Description of your hug: {this.props.content}</p>
						<p>Total hug duration per person: {this.props.duration}</p>
					</div>
					<CommentList comments={this.props.comments}/>
					<CommentPostData id={this.props.id} loadHugsFromServer={this.props.loadHugsFromServer}/>
				</div>
			</div>
			)
	}
});

module.exports = HugCard;