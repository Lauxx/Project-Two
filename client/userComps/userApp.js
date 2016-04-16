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
var UserDisplayCard = require('./userDisplayCard');
var UserUpdateFormData = require('./userUpdateFormData');
var HugPostData = require('./HugPostData');
var UserToggle = require('./userToggle');

var UserApp = React.createClass({
	getInitialState: function(){
		return {
			activeComponent: 'userDisplay'
		}
	},

	showComp: function(){
		if(this.state.activeComponent === 'userDisplay'){
			return <UserDisplayCard user={ this.props.user }/>
		} else if(this.state.activeComponent === 'userUpdate'){
			return <UserUpdateFormData user={ this.props.user } 
										getCurrentUserFromServer={ this.props.getCurrentUserFromServer }
										loadHugsFromServer={this.props.loadHugsFromServer} />
		} else if(this.state.activeComponent === 'hugPost'){
			return <HugPostData loadHugsFromServer={this.props.loadHugsFromServer} />	
		} else {
			throw new Error('No active Component', this.state.activeComponent);
		}
	},

	toggleActiveComp: function(name){
		this.setState({activeComponent: name})
	},

	render: function(){
		return (
			<div>
			<UserToggle toggleActiveComp={ this.toggleActiveComp }/>
			 { this.showComp() }
			</div>
			)
	}
});

module.exports = UserApp;