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

var UserDisplayCard = React.createClass({
	render: function(){
		return (
			<div className="container jumbotron">
				<a className="btn btn-default edit-button pencil" 
				onClick={ this.props.toggleActiveComp.bind(null,'userUpdate') }>
				<span className="glyphicon glyphicon-edit pencil"></span>
				</a>
				<h1> Welcome {this.props.user.local.username}!</h1>
				<img src={this.props.user.local.profileImage } height="60px" width="60px" />
			</div>
			)
	}
});

module.exports = UserDisplayCard;