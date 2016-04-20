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
					<a onClick={ props.toggleActiveComp.bind(null,'userDisplay')} ><img src="img/user.png" /></a>
						<div> Your User Display</div>
				</div>
				<div className="container col-lg-1">
					<a onClick={ props.toggleActiveComp.bind(null,'userUpdate')} ><img src="img/tools.png"/></a>
						<div>Update Your User Profile </div>
				</div>
				<div className="container col-lg-1">
					<a onClick={ props.toggleActiveComp.bind(null,'hugPost') } ><img src="img/heart.png"/></a>
						<div> Post a Hug</div>
				</div>
			</div>
			
			)
	};

module.exports = UserToggle;