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
import Modal from 'react-modal'
var CommentList = require('./commentList');
var CommentPostData = require('./commentPostData');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '50%',
    bottom                : '-20%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    		
  },
  overlay : {
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : '#ecf0f1',
	
  },
  

};

var HugCard = React.createClass({
	getInitialState: function(){
		return {
			activeUser: null,
			modalIsOpen: false,
			
		}
	},

	contextTypes: {
		sendNotification: React.PropTypes.func.isRequired
	},

	openModal: function(){
		this.setState({ modalIsOpen: true, originalBodyOverflow: document.body.style.overflow });
		document.body.style.overflow = 'hidden';
	},

	afterOpenModal: function(){
		this.refs.subtitle.style.color = 'black'
	},

	closeModal: function(){
		this.setState({ modalIsOpen: false });
		document.body.style.overflow = this.state.originalBodyOverflow;
	},

	modalDisplay: function(){

		var user = this.props.user && this.props.user.local ? this.props.user.local.username : 'no user';
		var userImage = this.props.user && this.props.user.local ? this.props.user.local.profileImage : null;
		var commentForm = this.state.activeUser ? <CommentPostData id={this.props.id} loadHugsFromServer={this.props.loadHugsFromServer} user={this.props.user}/> : null;
		var loggedInUser = this.state.activeUser && this.state.activeUser.local ? this.state.activeUser._id : loggedInUser;
		
	if(this.props.user._id === loggedInUser ){
		return (
			<div>
			<Modal
				isOpen={this.state.modalIsOpen}
          		onAfterOpen={this.afterOpenModal}
          		onRequestClose={this.closeModal}
          		style={customStyles} >
          			<div className="col-lg-5">	
          				<img src={ userImage } className="img-thumbnail img"  width="250" height="250" />
          			</div>
          			<div className="col-lg-7">
          				<a><span className="glyph glyphicon glyphicon-remove-circle userIcon" title="Close" onClick={this.closeModal}></span></a>
          					<h2 className="avenir underline">{this.props.title}</h2>
          					<p className='avenir'> From @{ user }</p>
          					<p className='avenir'> Content: { this.props.content }</p>
          					<p className='avenir'> Date of hug: { this.props.dayOfHug } </p>
          					<p className='avenir'> { this.props.duration } </p>
          			</div>			
          						{ commentForm } 

							<CommentList 
								comments={this.props.comments} 
								loadHugsFromServer={this.props.loadHugsFromServer} 
								activeUser={ this.state.activeUser }/>

          			
          			
				</Modal>
			</div>
			)
		} else {
			return (
				<div>
			<Modal
				isOpen={this.state.modalIsOpen}
          		onAfterOpen={this.afterOpenModal}
          		onRequestClose={this.closeModal}
          		style={customStyles} >
          		
          		<div className="col-lg-5">
          			<img src={ userImage } className="img-thumbnail"  width="250" height="250" />
          		</div>
          		<div className="col-lg-7">	
          			<a><span className="glyph glyphicon glyphicon-remove-circle userIcon" title="Close" onClick={this.closeModal}></span></a>	
          			<h2 className='avenir underline'>{this.props.title}</h2>
          			<p> From @{ user }</p>
          			<p> Content: { this.props.content }</p>
          			<p> Date of hug: { this.props.dayOfHug } </p>
          			<p> { this.props.duration } </p>
          		</div>	
          			{ commentForm } 

							<CommentList 
								comments={this.props.comments} 
								loadHugsFromServer={this.props.loadHugsFromServer} 
								activeUser={ this.state.activeUser }/>
          		
          			
				</Modal>
			</div>
				)
		}
	},

	deleteHugPost: function(){
			var self = this;
			$.ajax({
				url: '/api/hugs/' + this.props.id,
				method: 'DELETE'
			}).done(function(){
				self.props.loadHugsFromServer();
				self.context.sendNotification('Hug deleted.');
			})
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
		
		var loggedInUser = this.state.activeUser && this.state.activeUser.local ? this.state.activeUser._id : loggedInUser;
		var user = this.props.user && this.props.user.local ? this.props.user.local.username : 'no user';
		var userImage = this.props.user && this.props.user.local ? this.props.user.local.profileImage : null;

		 if(this.props.user._id === loggedInUser ){
			return (
			

				<div className="container hugCard col-lg-4 col-md-3 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
					<div className="card">
						<div className="avenir">
  								<div className="col-lg-5 col-md-5">
  								
  								<img src={ userImage } className="img-thumbnail card-img-top img"  width="200" height="200"/>
    							</div>
    							<div className="col-lg-7 col-md-7">
    							<a><span className="glyph glyphicon glyphicon-remove-circle userIcon" title="Delete Your Hug" onClick={ this.deleteHugPost.bind(null, this.props.id) }></span></a>
    							<h4 className="card-title underline">{this.props.title} <small> from </small> @{user} </h4>
    							<p className="card-text">{this.props.content}</p>
    							<p className="card-text"> When: {this.props.dayOfHug}</p>
    							<p className="card-text"><small className="text-muted">{this.props.duration}</small></p>  						
  								<a onClick={ this.openModal.bind(null, this.props.id) } className="comment-glyph userIcon"><img src='img/comment.png'/></a>	 
								{ this.modalDisplay() }
								
						
  								</div>
						</div>
					</div>
				</div>
				
			)

		} else if(!loggedInUser){
			return (
				
				<div className="container hugCard col-lg-4 col-md-3 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
					<div className="card">
						<div className="avenir">
  								<div className="col-lg-5 col-md-5">
  								
  								<img src={ userImage } className="img-thumbnail card-img-top img"  width="200" height="200"/>
    							</div>
    							<div className="col-lg-7 col-md-7">
    							
    							<h4 className="card-title underline">{this.props.title} <small> from </small> @{user} </h4>
    							<p className="card-text">{this.props.content}</p>
    							<p className="card-text"> When: {this.props.dayOfHug}</p>
    							<p className="card-text"><small className="text-muted">{this.props.duration}</small></p>  						
  								
								
						
  								</div>
						</div>
					</div>
				</div>
			

				)
			
		} else {
			return (
				
				<div className="container hugCard col-lg-4 col-md-3 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
					<div className="card">
						<div className="avenir">
  								
  								<div className="col-lg-5 col-md-5">
  									<img src={ userImage } className="img-thumbnail card-img-top img userIcon"  width="200" height="200"/>
    							</div>
    							<div className="col-lg-7 col-md-7">

    								<h4 className="card-title underline">{this.props.title} <small> from </small> @{user} </h4>
    								<p className="card-text">{this.props.content}</p>
    								<p className="card-text"> When: {this.props.dayOfHug}</p>
    								<p className="card-text"><small className="text-muted">{this.props.duration}</small></p>  						
  									<a onClick={ this.openModal.bind(null, this.props.id) } className="comment-glyph userIcon"><img src='img/comment.png'/></a>
								{ this.modalDisplay() }
								
						
  								</div>
						</div>
					</div>
				</div>
			

				)
		}
	}
});





module.exports = HugCard;