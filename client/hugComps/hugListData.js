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

	render: function(){
		return (
			<div>
				<HugList hugArray={this.props.hugArray} loadHugsFromServer={this.props.loadHugsFromServer} />
			</div>
			)
	}
});

module.exports = HugListData;