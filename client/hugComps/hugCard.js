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
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    font 				  : 'avenir'			
  }
};

var HugCard = React.createClass({
	getInitialState: function(){
		return {
			activeUser: null,
			modalIsOpen: false,
			
		}
	},

	openModal: function(){
		this.setState({ modalIsOpen: true })

	},

	afterOpenModal: function(){
		this.refs.subtitle.style.color = '#f00'
	},

	closeModal: function(){
		this.setState({ modalIsOpen: false })
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
          		<img src={ userImage } className="img-thumbnail"  width="304" height="236" />	
          		<h2 ref="subtitle">{this.props.title}</h2>
          			<p> From @{ user }</p>
          			<p> Content: { this.props.content }</p>
          			<p> Date of hug: { this.props.dayOfHug } </p>
          			<p> { this.props.duration } </p>
          			{ commentForm } 

							<CommentList 
								comments={this.props.comments} 
								loadHugsFromServer={this.props.loadHugsFromServer} 
								activeUser={ this.state.activeUser }/>

          			<button onClick={this.closeModal}>close</button>
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
          		<div className="myScroll" data-target="#commentScroll">
          		<div id="commentScroll">	
          		<img src={ userImage } className="img-thumbnail"  width="304" height="236" />	
          		<h2 ref="subtitle">{this.props.title}</h2>
          			<p> From @{ user }</p>
          			<p> Content: { this.props.content }</p>
          			<p> Date of hug: { this.props.dayOfHug } </p>
          			<p> { this.props.duration } </p>
          			{ commentForm } 

							<CommentList 
								comments={this.props.comments} 
								loadHugsFromServer={this.props.loadHugsFromServer} 
								activeUser={ this.state.activeUser }/>

          			<button onClick={this.closeModal}>close</button>
          			</div>
          		</div>	
				</Modal>
			</div>
				)
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
		
		
		var user = this.props.user && this.props.user.local ? this.props.user.local.username : 'no user';
		
		var userImage = this.props.user && this.props.user.local ? this.props.user.local.profileImage : null;

		 
			return (
			<div className=''>
				<div className="container hugCard col-lg-3 col-md-3">
					<div className="card">
						<div className="avenir">
  								
  								<a><span className="glyph glyphicon glyphicon-remove-circle" title="Delete Your Hug" onClick={ this.deleteHugPost.bind(null, this.props.id) }></span></a>
  								<img src={ userImage } className="img-thumbnail card-img-top img"  width="304" height="236"/>
    							<div className="card-block">

    							<h4 className="card-title">{this.props.title} <small> from </small> @{user} </h4>
    							<p className="card-text">{this.props.content}</p>
    							<p className="card-text"> When: {this.props.dayOfHug}</p>
    							<p className="card-text"><small className="text-muted">{this.props.duration}</small></p>  						
  								<a onClick={ this.openModal.bind(null, this.props.id) } className="comment-glyph userIcon"><img src='img/comment.png'/></a>	 
								{ this.modalDisplay() }
								
						
  								</div>
						</div>
					</div>
				</div>
			</div>	
			)
		
	}
});





module.exports = HugCard;