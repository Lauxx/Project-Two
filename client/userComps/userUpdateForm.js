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

var UserUpdateForm = React.createClass({
	render: function(){
		return (
			<div className="container avenir col-lg-6 col-lg-offset-3 hugForm">
			<form action="" onSubmit={ this.props.handleUserSubmit } role="form" >
				<legend>Update your user status</legend>
				<br/>
				<div className="form-group">
					<label for="">Update your username</label>
					<input type="text" value={ this.props.username } 
					onChange={ this.props.handleUserNameChange } className="form-control" id="" placeholder="Update your username"/>
					<br/>
				</div>
				<div className="form-group">
					<label for="">Update your profile image</label>
					<input type="text" value={ this.props.profileImage } 
					onChange={ this.props.handleProfileImageChange } className="form-control" id="" placeholder="http://example.com"/>
					<br/>
				</div>
				
			
				<button type="submit" className="btn btn-primary">Update</button>
				<br/>
			</form>
			<div>
			
			</div>
			</div>
			)
	}
});

module.exports = UserUpdateForm;