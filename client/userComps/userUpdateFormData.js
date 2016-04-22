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
var UserUpdateForm = require('./userUpdateForm');

var UserUpdateFormData = React.createClass({
	getInitialState: function(){
		return {
		username: null,
		profileImage: null
		}
	},


	handleUserNameChange: function(e){
		this.setState({ username: e.target.value })
	},


	handleProfileImageChange: function(e){
		this.setState({ profileImage: e.target.value })
	},



	handleUserFormSubmit: function(userInfo){
		var self = this;
		var id = this.props.user._id;
		console.log("trying to call handleUserFormSubmit");
		console.log(userInfo);
		$.ajax({
			url: '/api/user/' + id,
			dataType: 'json',
			type: 'PUT',
			data: userInfo,
			success: function(data){
				this.props.getCurrentUserFromServer();
				this.props.loadHugsFromServer();

			}.bind(this),
			error: function(xhr, status, err){
				console.error('/api/user/' + id, status, err.toString());
			}.bind(this)
		});
	},



	handleUserSubmit: function(e){
		e.preventDefault();
		

		var username = this.state.username.trim();
		var profileImage = this.state.profileImage;


		this.handleUserFormSubmit({ username: username, profileImage: profileImage });
		this.setState({ username: '', profileImage: ''});
	},


	render: function(){
		return (

			<div>
				<UserUpdateForm 
					toggleActiveComp={ this.props.toggleActiveComp }
					handleUserSubmit={ this.handleUserSubmit } 
					handleUserNameChange={ this.handleUserNameChange }
					handleProfileImageChange={ this.handleProfileImageChange }
					username={ this.state.username} 
					profileImage={ this.state.profileImage }/>
			</div>
			
			)
	}
});

module.exports = UserUpdateFormData;