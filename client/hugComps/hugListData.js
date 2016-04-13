//	HugApp
//	   NavBar
//	   UserAuth
//	   UserApp
//	   HomePage(Logo/Carousel/Quotes)
//	   UserData
//		 UserDisplayCard
//	   UserFormData
//	     UserUpdateForm
//	   HugPostData
//		 HugPostForm	
//	 **HugListData
//		 HugList
//		   HugCard?
//			 CommentList
//			 CommentPostData
//				CommentPostForm
//	   Footer

var React = require('react');

var HugList = require('./hugList');

var HugListData = React.createClass({
	getInitialState: function(){
		return {
			hugArray: [],
			commentsArray: []
		}
	},

	loadHugsFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/hugs',
			method: 'GET'
		}).done(function(data){
			self.setState({ hugArray: data })
		})
	},

	componentDidMount: function(){
		this.loadHugsFromServer()
	},

	render: function(){
		return (
			<div>
				<HugList hugArray={this.state.hugArray} />
			</div>
			)
	}
});

module.exports = HugListData;