//	HugApp
//	   NavBar
//	   UserAuth
//	   UserApp
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
var NavBar = require('./navbar');
var Footer = require('./footer');
var UserAuth = require('./userAuth');
var Home = require('./home');
var UserApp = require('./userApp');
var HugListData = require('./hugComps/HugListData');
import HugsMap from './mapComps/map'

require('./stylesheets/main.scss');

var HugApp = React.createClass({
	getInitialState: function(){
		return {
			activeComponent: 'home'
		}
	},

	setActiveComponent: function(componentName){
		this.setState({
			activeComponent: componentName
		})
	},

	getActiveComponent: function(){
		return this.state.activeComponent
	},
	
	showWhichComponent: function(){
		switch(this.state.activeComponent){
			case 'home' : 
				return <Home />
				break;
			case 'login' :
				return <UserApp login={ true } setActiveComponent={ this.setActiveComponent } />
				break;
			case 'signUp' :
				return <UserApp login={ false } setActiveComponent={ this.setActiveComponent } />
				break;
			default: 
			return <Home /> 
		}
	},


  render: function() {
  	console.log("hello from hugs map");
  	console.log(HugsMap);
    return (
      <div>
      	<UserAuth >
      	<div>
      		<NavBar setActiveComponent={ this.setActiveComponent } getActiveComponent={ this.getActiveComponent }/>
      		{ this.showWhichComponent() }
      	</div>	
      	</UserAuth>
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