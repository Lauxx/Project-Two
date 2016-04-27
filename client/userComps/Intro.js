var React = require('react');

var Intro = React.createClass({

	render: function(){
		window.loggedInUser = this.props.user && this.props.user.local ? this.props.user._id : null;
		if(!loggedInUser){
			return (
			<div className="container avenir introContainer">
				
					
				<h2>Welcome to HuggSocial</h2>

					<p className="intro">HuggSocial is a community forum created to help others connect with the simplicity of hugs.
						 Hugging has been proven to reduce stress levels & increase the production of oxytocin in the brain, 
						 leading to overall mental and emotional health benefits. The more oxytocin produced eventually leads to 
						 better control under stressful situations. Our forum allows users to set a time and place they wish to give 
						 and receive hugs in the community of Missoula, MT.</p>

						 <p className="center intro"><b>"We need 4 hugs a day for survival. We need 8 hugs a day for maintenance. We need 12 hugs a day for growth.” 
						 -Dr. Virginia Satir</b></p>

             <p className="intro">Join our community today to start spreading the love.</p>
			</div>
		)
		} else {
			return null;
		}
	}
});

module.exports = Intro;