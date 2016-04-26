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
var NewHugsMap = require('../mapComps/newHugMap');

var HugPostForm = React.createClass({


	render: function (){
		return (

			<div className="container col-lg-8 col-lg-offset-2 col-xl-6 col-xl-offset-3 col-xs-10 col-xs-offset-1 avenir hugForm">
				<form action="" onSubmit={this.props.handleHugSubmit} role="form">
					<legend>Post your hug</legend>
						<br/>
					<div className="form-group">
						<h4 for="">Give your hug a title: </h4>
						<input type="text" onChange={this.props.handleTitleChange} value={ this.props.title } className="form-control" id="" placeholder="Input field" />
					</div>
						<br/>
					<div className="form-group">
						<h4 for="">Tell everyone about it: </h4>
						<input type="text" onChange={this.props.handleContentChange} value={ this.props.content } className="form-control" id="" placeholder="Input field" />
					</div>
						<br/>
					<div className="form-group">
				      	<h4 className="legend">Choose a day to send some love: </h4><br/>
				         <input type="date" onChange={ this.props.handleDayOfHugChange } value={ this.props.dayOfHug } id="input" className="form col-xs-3 date-input" data-date-format="mm/dd/yyyy"
                     	required="required" title=""/><br/>
				    </div>
				    	<br/>
					<div className="form-group">
						<h4 for="">What time will you be out: </h4>
						<input type="text" onChange={this.props.handleDurationChange} value={ this.props.duration } className="form-control" id="" placeholder="Input field" />
					</div>
						<br/><br/>
					<h4> Drag the marker to your Hug location </h4>
					<NewHugsMap onMarkerMoved={ this.props.handleMarkerMoved } value={ {lat: this.props.lat, lng: this.props.lng} }/>
						<br/><br/>
					<button type="submit" className="btn btn-primary">Post Your Hug</button>
				</form>
			</div>
			
			)
	}
});

module.exports = HugPostForm;