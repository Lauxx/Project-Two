//  HugApp
//     Notifier
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

var HugCard = require('./hugCard');

function HugList(props){
	var hugs = props.hugArray.map(function(item){
		
		return <HugCard 
					id = { item._id }
					title = { item.title }
					content = { item.content }
					duration = { item.duration }
					dayOfHug = { item.dayOfHug }
					user = { item.user }
					date = { item.date }
					comments={ item.comments }
					loadHugsFromServer={ props.loadHugsFromServer } />
		})

		return (

			<div>
				{hugs}
			</div>
			
			)
};

module.exports = HugList;