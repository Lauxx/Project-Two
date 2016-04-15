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
var moment = require('moment');

var CommentList = require('./commentList');

var CommentPostData = require('./commentPostData');

var HugCard = React.createClass({
	getInitialState: function(){
		return {
			activeUser: null
		}
	},

	deleteHugPost: function(){
		if(confirm('Are you sure you want to delete?')){
			var self = this;
			$.ajax({
				url: '/api/hugs/' + this.props.id,
				method: 'DELETE'
			}).done(function(){
				self.props.loadHugsFromServer();
			})
		}
	},

	getCurrentUserFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/user',
			method: 'GET'
		}).done(function(data){
			self.setState({ activeUser: data })
		})
	},

	componentDidMount: function(){
		this.getCurrentUserFromServer();
	},

	render: function(){
		var commentForm = this.state.activeUser ? <CommentPostData id={this.props.id} loadHugsFromServer={this.props.loadHugsFromServer}/> : null;
		var user = this.props.user && this.props.user.local ? this.props.user.local.username : 'no user';
		return (
			<div>
				<div className="container col-xs-6 col-xs-offset-3">
					<div className="card">
  						<div className="card-block">
    						<h4 className="card-title">{this.props.title} from @{user}</h4>
    						<p className="card-text">{this.props.content}</p>
    						<p className="card-text"><small class="text-muted">{this.props.duration}</small></p> 
    						<p className="card-text"><small class="text-muted">{this.props.date}</small></p>  						
  							<a className="btn btn-primary" onClick={ this.deleteHugPost.bind(null, this.props.id) }>Delete Post</a>
  						</div>
					</div>
					<CommentList comments={this.props.comments} loadHugsFromServer={this.props.loadHugsFromServer} />
					{ commentForm }
				</div>
			</div>
			)
	}
});





module.exports = HugCard;