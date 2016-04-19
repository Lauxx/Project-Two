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

var CommentList = React.createClass({
	deleteComment: function(id){
		if(confirm('Are you sure you want to delete your comment?')){
			var self = this;
			$.ajax({
				url: '/api/hugs/comment/' + id,
				method: 'DELETE'
			}).done(function(){
				self.props.loadHugsFromServer();
			})
		}
	},

	render: function(){
		var self = this;
		var loggedInUser = this.props.activeUser && this.props.activeUser.local ? this.props.activeUser._id : loggedInUser;
		var comments = this.props.comments.map(function(comm){
		var user = comm.user && comm.user.local ? comm.user.local.username : 'no user';

		if (comm.user._id === loggedInUser){
			return (
			<div>
				<div className="container col-xs-12">
					<div className="card">
  						<div className="card-block">
  							<img src='' />
    						<h4 className="card-title">@{user}</h4>
    						<p className="card-text">{comm.body}</p>
    						<p className="card-text"><small class="text-muted">{comm.date.substr(0,10)}</small></p>
    						<a className="btn btn-primary" onClick={self.deleteComment.bind(null, comm._id)}>Delete Comment</a>
  						</div>
					</div>
				</div>	
			</div>
			)
	} else {
		return (
			<div>
				<div className="container col-xs-12">
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
		}
	});
		

		return (
			<div>
				{comments}
			</div>
			)
	}
});


module.exports = CommentList;