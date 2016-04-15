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

var CommentPostForm = require('./commentPostForm');

var CommentPostData = React.createClass({
	getInitialState: function(){
		return {
			body: null
		}
	},

	handleBodyChange: function(e){
		this.setState({body: e.target.value})
	},

	handleNewCommentPost: function(comment){
		$.ajax({
			url: '/api/hugs/' + this.props.id + '/comments',
			type: 'POST',
			data: comment,
			success: function(data){
				this.props.loadHugsFromServer();
			}.bind(this),
			error: function(xhr, status, err){
				console.error('/api/hugs/' + this.props.id + '/comments', status, err.toString());
			}.bind(this) 
		})
	},

	handleCommentSubmit: function(e){
		e.preventDefault();
		var comment = {};
		comment.body = this.state.body.trim();

		if(!comment.body){
			return;
		} else {
			this.handleNewCommentPost(comment);
			this.setState({
				body: ''
			});
		}
	},

	render: function(){
		return (
			<div>
				<CommentPostForm body={this.state.body} handleBodyChange={this.handleBodyChange} handleCommentSubmit={this.handleCommentSubmit}/>
			</div>
			)
	}
});

module.exports = CommentPostData;