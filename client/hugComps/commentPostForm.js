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

var CommentPostForm = React.createClass({
	render: function(){
		var user = this.props.user && this.props.user.local ? this.props.user.local.username : 'no user';
		return (
			<div>
		    <form className="col-lg-12 comment-box" onSubmit={ this.props.handleCommentSubmit }>
		        <fieldset className="form-group">
		        <br/><br/>
		       <label for="formGroupExampleInput2">Leave @{user} a comment!</label>
		       <textarea type="text" className="form-control" onChange={ this.props.handleBodyChange }
		       value={ this.props.body }
		       id="formGroupExampleInput2" placeholder="Comment Content"></textarea>
		     </fieldset>
		     <button className="btn btn-default" type="submit">Post a Comment</button>
		    </form>
			</div>
			)
	}
});

module.exports = CommentPostForm;