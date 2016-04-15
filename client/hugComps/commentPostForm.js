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
		return (
			<div>
		    <form className="col-xs-4 comment-box" onSubmit={ this.props.handleCommentSubmit }>
		        <fieldset className="form-group">
		        <br/><br/>
		       <label for="formGroupExampleInput2">Comment Content</label>
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