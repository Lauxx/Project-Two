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

var HugPostForm = require('./hugPostForm');

var HugPostData = React.createClass({
	
	getInitialState: function(){
		return {
			title: null,
			content: null,
			duration: null
		}
	},

	handleTitleChange: function(e){
		this.setState({ title: e.target.value });
	},

	handleContentChange: function(e){
		this.setState({ content: e.target.value });
	},

	handleDurationChange: function(e){
		this.setState({ duration: e.target.value });
	},

	handleNewHugPost: function(hug){
		$.ajax({
			url: '/api/hugs',
			type: 'POST',
			data: hug,
			success: function(data){
				this.props.loadHugsFromServer();
			}.bind(this),
			error: function(xhr, status, err){
				console.error('/api/hugs', status, err.toString())
			}.bind(this)
		})
	},

	handleHugSubmit: function(e){
		e.preventDefault();

		var title = this.state.title.trim();
		var content = this.state.content.trim();
		var duration = this.state.duration.trim();

		if(!title && !content && !duration){
			return;
		}

		this.handleNewHugPost({ title: title, content: content, duration: duration });
		this.setState({ title: '', content: '', duration: '' });

	},

	render: function(){
		return (
			<div>
				<HugPostForm handleHugSubmit={this.handleHugSubmit}
							handleTitleChange={this.handleTitleChange}
							handleContentChange={this.handleContentChange}
							handleDurationChange={this.handleDurationChange}
										 />
			</div>
			)
	}
});

module.exports = HugPostData;