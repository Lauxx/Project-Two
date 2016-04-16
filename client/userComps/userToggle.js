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

function UserToggle(props){
		return (
			<div className="container">
			<nav className="navbar navbar-default" role="navigation">
				<div className="container-fluid">
				
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<ul className="nav navbar-nav">
						<li><a>Your Hug Navigation.</a></li>
						</ul>
					</div>
			
					
					<div className="collapse navbar-collapse navbar-ex1-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">Preferences</a>
								<ul className="dropdown-menu">
									<li><a onClick={ props.toggleActiveComp.bind(null,'userDisplay') }>User Profile</a></li>
									<li><a onClick={ props.toggleActiveComp.bind(null,'userUpdate') }>User Preferences</a></li>
									<li><a onClick={ props.toggleActiveComp.bind(null,'hugPost') }>Post Your Hug</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			</div>
			)
	};

module.exports = UserToggle;