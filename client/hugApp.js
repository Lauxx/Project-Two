//	HugApp
//	   HomePage(Logo/Carousel/Quotes)
//	   UserData
//		 UserDisplayCard
//	   	 UserFormData
//	       UserUpdateForm
//	     HugPostData
//		   HugPostForm	
//	   HugListData
//		 HugList
//		   HugCard
//			 CommentList
//			 CommentPostData
//				CommentPostForm
//		 Footer




var React = require('react');
var ReactDom = require('react-dom');
var Footer = require('./footer');
var Home = require('./home');
var HugListData = require('./hugComps/HugListData');
import HugsMap from './mapComps/map'
var UserData = require('./userComps/userData');

require('./stylesheets/main.scss');

var HugApp = React.createClass({
  render: function() {
    return (
      <div>
        <UserData/>
      	<Home />
      	<HugListData />
      	<HugsMap />
        <Footer />
      </div>
      );
  }
});

ReactDom.render(
  <HugApp />, document.getElementById('app')
);