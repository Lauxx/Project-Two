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

var HugList = require('./hugList');

var HugListData = React.createClass({
	getInitialState: function(){
		return {
			hugArray: [],
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
				<HugList hugArray={this.state.hugArray} loadHugsFromServer={this.loadHugsFromServer} />
			</div>
			)
	}
});

module.exports = HugListData;