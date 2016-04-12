//	HugApp
//	   NavBar
//	   HomePage(Logo/Carousel/Quotes)
//	   UserData
//		 UserDisplayCard
//	   UserFormData
//	     UserUpdateForm
//	   HugPostData
//		 HugPostForm	
//	   HugListData
//		 HugList
//		   HugCard
//			 CommentList
//			 CommentPostData
//				CommentPostForm
//	   Footer		




var React = require('react');
var ReactDom = require('react-dom');



var HugApp = React.createClass({
  render: function() {
    return (
      <div>
        <h1> Hug world! </h1>
      </div>
      );
  }
});

ReactDom.render(
  <HugApp />, document.getElementById('app')
);