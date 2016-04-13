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

var NavBar = React.createClass({


	render: function(){
		return (
	<div>
		<nav className="navbar navbar-default navbar-inverse" role="navigation">
  			<div className="container-fluid">
    			<div className="navbar-header ">
      				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        				<span className="sr-only">Toggle navigation</span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
        				<span className="icon-bar"></span>
      				</button>
      				<a className="navbar-brand brand">HuggApp</a>	
    			</div>
   				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
     		 		<ul className="nav navbar-nav navbar-right">
						<li className="dropdown">
							<a href="#" className="dropdown-toggle optima" 
							data-toggle="dropdown">Login<span className=""></span></a>
							<ul id="" className="dropdown-menu">
								<li>
									<div className="row">
										<div className="col-md-12 optima">
											<form action="/login" method="POST" 
											role="form">
												<div className="form-group login-form">
													<label for="">Email</label>
														<input name="email" type="email" className="form-control" id="" placeholder="Email here"/><br/>
													<label for="">Password</label>
														<input name="password" type="password" className="form-control" id="" placeholder="Password"/>
												</div>
												<button type="submit" className="btn login-button">Submit</button>
											</form>
										</div>
					 				</div>
								</li>
							</ul>
        				</li>
        				<li className="dropdown">
							<a href="#" className="dropdown-toggle optima" 
							data-toggle="dropdown">Sign Up<span className=""></span></a>
							<ul id="login-dp" className="dropdown-menu">
								<li>
									<div className="row">
										<div className="col-md-12 optima">
											<form action="/signup" method="POST" 
											role="form">
												<div className="form-group login-form">
													<label>Username</label>
														<input className="form-control" name="username" type="username" id="" placeholder="Username"/><br/>
													<label for="">Profile Image</label>
														<input type="text" name="profileImage" className="form-control" id="" placeholder="Upload profile image here"/><br/>	
													<label>Email</label>
														<input name="email" type="email" className="form-control" id="" placeholder="Email here"/><br/>
													<label for="">Password</label>
														<input name="password" type="password" className="form-control" id="" placeholder="Password"/>
												</div>
												<button type="submit" className="btn login-button">Submit</button>
											</form>
										</div>
					 				</div>
								</li>
        					</ul>
      		 			</li>
      		 		<li>
      		 			<a href="/logout" className="optima">Logout</a>
      		 		</li>
      		 	</ul>	
    		</div>
    	</div>
    </nav>
  </div>
			)
	}
});


module.exports = NavBar;