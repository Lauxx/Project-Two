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
var HugPostForm = require('./hugPostForm');

var HugPostData = React.createClass({
	
	getInitialState: function(){
		return {
			title: null,
			content: null,
			duration: null,
			dayOfHug: null,
			lat: 46.8787,
			lng: -114.000
		}
	},


	handleMarkerMoved: function(lat, lng) {
		this.setState({ lat: lat, lng: lng })
		console.log(lat, lng);
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


	handleDayOfHugChange: function(e){
		this.setState({ dayOfHug: e.target.value })
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
		var dayOfHug = this.state.dayOfHug.trim();
		var lat = this.state.lat;
		var lng = this.state.lng;

		if(!title && !content && !duration && !dayOfHug){
			return;
		}

		this.handleNewHugPost({ title: title, content: content, duration: duration, dayOfHug: dayOfHug, lat: lat, lng: lng });
		this.setState({ title: '', content: '', duration: '', dayOfHug: '', lat: '', lng: '' });

	},


	render: function(){
		return (

			<div>
				<HugPostForm handleHugSubmit={ this.handleHugSubmit }
							handleTitleChange={ this.handleTitleChange }
							handleContentChange={ this.handleContentChange }
							handleDurationChange={ this.handleDurationChange }
							handleDayOfHugChange={ this.handleDayOfHugChange }
							handleMarkerMoved={ this.handleMarkerMoved }
							title={ this.state.title }
							content={ this.state.content }
							duration={ this.state.duration }
							dayOfHug={ this.state.dayOfHug }
							lat={ this.state.lat }
							lng={ this.state.lng } />
			</div>

			)
	}
});

module.exports = HugPostData;