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

var Footer = React.createClass({
	render: function(){
		return (

		<div>
			<div className="navbar footer navbar-inverse navbar-fixed-bottom">
				<div className="container-fluid">
					<p className="navbar-brand footer">HuggSocial</p>
				</div>
			</div>
		</div>
		
			)
	}
});

module.exports = Footer;