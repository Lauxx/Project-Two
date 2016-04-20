//  HugApp
//     HomePage(Logo/Carousel/Quotes)
//     UserApp
//     UserToggle 
//       UserDisplayCard
//         UserFormData
//          UserUpdateForm
//        HugPostData
//        HugPostForm 
//     HugList
//       HugCard
//       CommentList
//       CommentPostData
//        CommentPostForm
//     AllHugsMap
//     NewHugsMap  
//     Footer


var React = require('react');

var UserDisplayCard = React.createClass({

	render: function(){
		return (

			<div className="container avenir">
				<h1> Welcome {this.props.user.local.username}!</h1>
				<img src={this.props.user.local.profileImage } className="img-thumbnail"  width="304" height="236"/>
			</div>
			
			)
	}
});

module.exports = UserDisplayCard;