var React = require('react');

var Intro = React.createClass({

	render: function(){
		window.loggedInUser = this.props.user && this.props.user.local ? this.props.user._id : null;
		if(!loggedInUser){
			return (
			<div className="well introContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div className="container col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
					<div className="col-lg-4 col-md-4">	
						<h2 className="welcome">Welcome to HuggSocial</h2>
					</div>
					<div className="col-lg-7 col-lg-offset-1 col-md-7 col-md-offset-1">
					<p className="optima">HuggSocial is a community forum created to help others connect with the simplicity of hugs.
						 Hugging has been proven to reduce stress levels & increase the production of oxytocin in the brain, 
						 leading to overall mental and emotional health benefits. The more oxytocin produced eventually leads to 
						 better control under stressful situations. Our forum allows users to set a time and place they wish to give 
						 and receive hugs in the community of Missoula, MT.</p>

						 <p className="center  avenir"><b>"We need 4 hugs a day for survival. We need 8 hugs a day for maintenance. We need 12 hugs a day for growth.” 
						 -Dr. Virginia Satir</b></p>

             		<p className=" center optima">Join our community today to start spreading the love.</p>
				</div>
			</div>
		</div>	
		)
		} else {
			return null;
		}
	}
});

module.exports = Intro;