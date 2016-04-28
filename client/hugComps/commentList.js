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

var CommentList = React.createClass({

	contextTypes: {
		sendNotification: React.PropTypes.func.isRequired
	},

	deleteComment: function(id){
			var self = this;
			$.ajax({
				url: '/api/hugs/comment/' + id,
				method: 'DELETE'
			}).done(function(){
				self.props.loadHugsFromServer();
				self.context.sendNotification("Comment deleted.");
			})
		
	},


	render: function(){

		var self = this;
		var loggedInUser = this.props.activeUser && this.props.activeUser.local ? this.props.activeUser._id : loggedInUser;
		var comments = this.props.comments.map(function(comm){
			var user = comm.user && comm.user.local ? comm.user.local.username : 'no user';

			if (comm.user._id === loggedInUser){
				return (

				<div>
					<div className="container col-xs-10 col-xs-offset-1 avenir">
						<a><span className="glyph glyphicon glyphicon-remove-circle userIcon" title="Delete Your Comment" onClick={self.deleteComment.bind(null, comm._id)}></span></a>
						<div className="card">
  							<div className="card-block">
  								<img src='' />
    							<h4 className="card-title underline">@{user}</h4>
    							<p className="card-text">{comm.body}</p>
    							<p className="card-text post-button"><small class="text-muted">{comm.date.substr(0,10)}</small></p>
    							
  							</div>
						</div>
					</div>	
				</div>

				)

			} else {

				return (

				<div>
					<div className="container col-xs-10 col-xs-offset-1 avenir">
						<div className="card">
  							<div className="card-block">
  								<img src='' />
    							<h4 className="card-title underline">@{user}</h4>
    							<p className="card-text">{comm.body}</p>
    							<p className="card-text post-button"><small class="text-muted">{comm.date.substr(0,10)}</small></p>
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