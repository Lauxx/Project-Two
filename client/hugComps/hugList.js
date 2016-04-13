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
//	   HugListData
//		 HugList
//		   HugCard
//			 CommentList
//			 CommentPostData
//				CommentPostForm
//		 Footer

var React = require('react');

var HugCard = require('./hugCard');

function HugList(props){
	var hugs = props.hugArray.map(function(item){
		
		return <HugCard 
							id = {item._id}
							title = {item.title}
							content = {item.content}
							duration = {item.duration}
							user = { item.user }
							comments={item.comments}
							loadHugsFromServer={props.loadHugsFromServer}
							/>
	})
		return (
			<div>
				{hugs}
			</div>
			)
};

module.exports = HugList;