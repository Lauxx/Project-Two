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
var ReactDom = require('react-dom');
var Footer = require('./footer');
var Home = require('./home');
var HugListData = require('./hugComps/HugListData');
import HugsMap from './mapComps/map'
var UserApp = require('./userComps/userApp');

require('./stylesheets/main.scss');

var HugApp = React.createClass({

  getInitialState: function(){
    return {
      hugArray: [],
      user: null
    }
  },

  loadHugsFromServer: function(){
    var self = this;
    $.ajax({
      url: '/api/hugs',
      method: 'GET'
    }).done(function(data){
      self.setState({ hugArray: data })
    })
  },

  getCurrentUserFromServer: function(){
    var self = this;
    $.ajax({
      url: '/api/user',
      method: 'GET'
    }).done(function(data){
      self.setState({ user: data })
    })
  },

  componentDidMount: function(){
    this.loadHugsFromServer();
    this.getCurrentUserFromServer();
  },

  render: function() {
    var hugListData = this.state.hugArray ? <HugListData hugArray={this.state.hugArray} loadHugsFromServer={this.loadHugsFromServer} /> : null;
    var userApp = this.state.user ?  <UserApp user={ this.state.user } getCurrentUserFromServer={this.getCurrentUserFromServer} loadHugsFromServer={this.loadHugsFromServer} /> : null
    return (
      <div>
      	<Home />
      	{ userApp }
      	{ hugListData } 
      	<HugsMap />
        <Footer />
      </div>
      );
  }
});

ReactDom.render(
  <HugApp />, document.getElementById('app')
);