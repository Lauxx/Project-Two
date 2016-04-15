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

var UserApp = React.createClass({
	getInitialState: function(){
		return {
			activeComponent: 'userDisplay'
		}
	},

	showComp: function(){
		if(this.state.activeComponent === 'userDisplay'){
			return <UserDisplayCard user={ this.props.user } toggleActiveComp={ this.toggleActiveComp }/>
		} else if(this.state.activeComponent === 'userUpdate'){
			return <UserUpdateFormData user={ this.props.user } getCurrentUserFromServer={ this.props.getCurrentUserFromServer } toggleActiveComp={ this.toggleActiveComp }/>
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
			 { this.showComp() }
			 <HugPostData loadHugsFromServer={this.props.loadHugsFromServer} />
			</div>
			)
	}
});

module.exports = UserApp;