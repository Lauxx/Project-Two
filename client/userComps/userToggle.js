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

function UserToggle(props){
		return (

			<div className="icons">
				<div className="container col-lg-1 col-lg-offset-4">
					<a onClick={ props.toggleActiveComp.bind(null,'userDisplay')} className="userIcon"><img src="img/user.png"/></a>
						<p>Your User Display</p>
					
				</div>
				<div className="container col-lg-1">
					<a onClick={ props.toggleActiveComp.bind(null,'userUpdate')} className="userIcon" ><img src="img/tools.png"/></a>
						<p>Update Your User Profile</p>
					
				</div>
				<div className="container col-lg-1">
					<a onClick={ props.toggleActiveComp.bind(null,'hugPost')} className="userIcon" ><img src="img/heart.png"/></a>
						<p>Post a Hug</p>
											
				</div>
			</div>
			
			)
	};

module.exports = UserToggle;