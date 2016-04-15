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

var HugPostForm = React.createClass({
	render: function (){
		return (
			<div className="container">
				<form action="" onSubmit={this.props.handleHugSubmit} role="form">
					<legend>Form title</legend>
				
					<div className="form-group">
						<label for="">title</label>
						<input type="text" onChange={this.props.handleTitleChange} className="form-control" id="" placeholder="Input field" />
					</div>

					<div className="form-group">
						<label for="">content</label>
						<input type="text" onChange={this.props.handleContentChange} className="form-control" id="" placeholder="Input field" />
					</div>

					<div className="form-group">
						<label for="">duration</label>
						<input type="text" onChange={this.props.handleDurationChange} className="form-control" id="" placeholder="Input field" />
					</div>
				
				
					
				
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
			)
	}
});

module.exports = HugPostForm;