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


			<div className="container icons">
	  		<div className="row row-centered">
	      	
	      	<div className="col-xs-2 col-centered">
	      		<a onClick={ props.toggleActiveComp.bind(null,'userDisplay')} className="userIcon"><img src="img/user.png"/></a>
				
	      	</div>
	      	<div className="col-xs-2 col-centered">
	      		<a onClick={ props.toggleActiveComp.bind(null,'userUpdate')} className="userIcon" ><img src="img/tools.png"/></a>
		
	      	</div>
	      	<div className="col-xs-2 col-centered">
	      		<a onClick={ props.toggleActiveComp.bind(null,'hugPost')} className="userIcon" ><img src="img/heart.png"/></a>

	      	</div>
	  		</div>
	  		<div className="row row-centered">
	  			<div className="col-xs-2 col-centered"> 
						<p>User Display</p>
	      	</div>
	      	<div className="col-xs-2 col-centered">	      	
						<p>Edit Profile</p>
	      	</div>
	      	<div className="col-xs-2 col-centered">
						<p>Post a Hug</p>
	      	</div>
	  		</div>
			</div>	

			)
	};

module.exports = UserToggle;