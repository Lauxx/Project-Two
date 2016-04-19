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
var NewHugsMap = require('../mapComps/map');

var HugPostForm = React.createClass({



	render: function (){
		return (
			<div className="container">
				<form action="" onSubmit={this.props.handleHugSubmit} role="form">
					<legend>Post your hug</legend>
				
					<div className="form-group">
						<label for="">Give your hug a title: </label>
						<input type="text" onChange={this.props.handleTitleChange} value={ this.props.title } className="form-control" id="" placeholder="Input field" />
					</div>

					<div className="form-group">
						<label for="">Tell everyone about it: </label>
						<input type="text" onChange={this.props.handleContentChange} value={ this.props.content } className="form-control" id="" placeholder="Input field" />
					</div>


					<div className="form-group">
				      			<label className="legend">Choose a day to send some love: </label><br/>
				         		<input type="date" onChange={ this.props.handleDayOfHugChange } value={ this.props.dayOfHug } id="input" className="form col-xs-3 date-input" data-date-format="mm/dd/yyyy"
                     			required="required" title=""/><br/>
				    </div>

					<div className="form-group">
						<label for="">duration</label>
						<input type="text" onChange={this.props.handleDurationChange} value={ this.props.duration } className="form-control" id="" placeholder="Input field" />
					</div>
				
					<NewHugsMap onMarkerMoved={ this.props.handleMarkerMoved } value={ {lat: this.props.lat, lng: this.props.lng} }/>
				
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
			)
	}
});

module.exports = HugPostForm;