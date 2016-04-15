//  HugApp
//     HomePage(Logo/Carousel/Quotes)
//     UserApp
//       UserDisplayCard
//         UserFormData
//          UserUpdateForm
//        HugPostData
//        HugPostForm 
//     HugListData
//     HugList
//       HugCard
//       CommentList
//       CommentPostData
//        CommentPostForm
//     Footer


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
				<img src={this.props.user.local.profileImage } className="img-thumbnail" alt="Cinque Terre" width="304" height="236"/>
			</div>
			)
	}
});

module.exports = UserDisplayCard;