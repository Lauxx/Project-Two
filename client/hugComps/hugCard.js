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
		
		var commentForm = this.state.activeUser ? <CommentPostData id={this.props.id} loadHugsFromServer={this.props.loadHugsFromServer} user={this.props.user}/> : null;
		var user = this.props.user && this.props.user.local ? this.props.user.local.username : 'no user';
		var loggedInUser = this.state.activeUser && this.state.activeUser.local ? this.state.activeUser._id : loggedInUser;
		var userImage = this.props.user && this.props.user.local ? this.props.user.local.profileImage : null;

		 if(this.props.user._id === loggedInUser ){
			return (
			<div className='flex-card'>
				<div className="container hugCard col-lg-3">
					<div className="card">
						<div className="avenir">
  								
  								 <a><span className="glyph glyphicon glyphicon-remove-circle" title="Delete Your Hug" onClick={ this.deleteHugPost.bind(null, this.props.id) }></span></a>
  								<img src={ userImage } className="img-thumbnail card-img-top img"  width="304" height="236"/>
    							<div className="card-block">

    							<h4 className="card-title">{this.props.title} <small> from </small> @{user} </h4>
    							<p className="card-text">{this.props.content}</p>
    							<p className="card-text"> When: {this.props.dayOfHug}</p>
    							<p className="card-text"><small className="text-muted">{this.props.duration}</small></p>  						
  									 
								{ commentForm } 
							<CommentList 
								comments={this.props.comments} 
								loadHugsFromServer={this.props.loadHugsFromServer} 
								activeUser={ this.state.activeUser }/>
						
  								</div>
						</div>
					</div>
				</div>
			</div>	

				)

		 } else {
			return (

				<div className="container hugCard col-lg-3 col-md-3">
					<div className="card">
						<div className="avenir">
  							
  								<img src={ userImage } className="img-thumbnail card-img-top img"  width="304" height="236"/>
    				
    							<h4 className="card-title">{this.props.title} from @{user}</h4>
    							<p className="card-text">{this.props.content}</p>
    							<p className="card-text">When: {this.props.dayOfHug}</p>
    							<p className="card-text"><small className="text-muted">{this.props.duration}</small></p>
  								{ commentForm }
  							<CommentList 
								comments={this.props.comments} 
								loadHugsFromServer={this.props.loadHugsFromServer} 
								activeUser={ this.state.activeUser }/>
  						</div>
						
					</div>
            	</div>
            	
				)
		}
	}
});





module.exports = HugCard;