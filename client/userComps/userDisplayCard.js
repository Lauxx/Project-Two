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
				<div className="col-lg-3">
					<img src={this.props.user.local.profileImage } className="img-thumbnail img"  width="304" height="236"/>
				</div>
				<div>
					<h3> Welcome {this.props.user.local.username}!</h3>
				</div>
			</div>
			
			)
	}
});

module.exports = UserDisplayCard;