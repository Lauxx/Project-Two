//	HugApp
//	   HomePage(Logo/Carousel/Quotes)
//	   UserData
//		 UserApp
//		   UserDisplayCard
//	   	   UserFormData
//	        UserUpdateForm
//	      HugPostData
//		    HugPostForm	
//	   HugListData
//		 HugList
//		   HugCard
//			 CommentList
//			 CommentPostData
//				CommentPostForm
//		 Footer


var React = require('react');

var CommentList = require('./commentList');

var CommentPostData = require('./commentPostData');

var HugCard = React.createClass({
	getInitialState: function(){
		return {
			activeUser: null
		}
	},

	getCurrentUserFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/user',
			method: 'GET'
		}).done(function(data){
			self.setState({ activeUser: data })
		})
	},

	componentDidMount: function(){
		this.getCurrentUserFromServer();
	},

	render: function(){
		var commentForm = this.state.activeUser ? <CommentPostData id={this.props.id} loadHugsFromServer={this.props.loadHugsFromServer}/> : null;
		var user = this.props.user.local ? this.props.user.local.username : 'no user';
		return (
			<div>
				<div className="container">
					<div className="completeHugPost">
				  		<p><b>@{user}</b></p>
						<p>Describe your hug: {this.props.title}</p>
						<p>Description of your hug: {this.props.content}</p>
						<p>Total hug duration per person: {this.props.duration}</p>
					</div>
					<CommentList comments={this.props.comments}/>
					{ commentForm }
				</div>
			</div>
			)
	}
});





module.exports = HugCard;