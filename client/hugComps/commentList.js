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

function CommentList(props){
	var comments = props.comments.map(function(comm){
		//console.log(comm);
		
		return (
			<div>
				<h4> Comments: </h4>
				<div className="container col-xs-10 col-xs-offset-1">
					<div className="card">
  						<div className="card-block">
  							<img src='' />
    						<h4 className="card-title">@{user}</h4>
    						<p className="card-text">{comm.body}</p>
    						<p className="card-text"><small class="text-muted">{comm.date.substr(0,10)}</small></p>
  						</div>
					</div>
				</div>	
			</div>
			)
	})
		return (
			<div>
				{comments}
			</div>
			)
	};

module.exports = CommentList;