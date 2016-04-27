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
		<div className="">
			<div className=" well userDisplayCard">
				<div className="col-lg-3 col-lg-offset-1 ">
					<img src={this.props.user.local.profileImage } className="img-thumbnail img"  width="304" height="236"/>
				</div>
				<div className="col-lg-6 col-lg-offset-1">
					<h3 className="optima"> Welcome, {this.props.user.local.username}.</h3>
					<p className="avenir">HuggSocial is a community forum created to help others connect with the simplicity of hugs. 
						 Hugging has been proven to reduce stress levels & increase the production of oxytocin in the brain 
						 - leading to overall mental and emotional health benefits. The more oxytocin produced eventually 
						 leads to better control under stressful situations. We encourage you to make your own post, 
						 however feel free to check-in on our active huggers below and seek them out in our community.</p>
						 <p className="optima center"> Happy Hugging!</p>
				</div>
			</div>
		</div>	
			)
	}
});

module.exports = UserDisplayCard;