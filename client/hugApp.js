//  HugApp
//     Notifier
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
var ReactDom = require('react-dom');
var Footer = require('./footer');
var HugList = require('./hugComps/hugList');
var AllHugsMap = require('./mapComps/allHugsMap');
var UserApp = require('./userComps/userApp');
var Intro = require('./userComps/Intro');
var Notifier = require('./Notifier');
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
   
    var hugListData = this.state.hugArray ? <HugList hugArray={this.state.hugArray} loadHugsFromServer={this.loadHugsFromServer} /> : null;
    var userApp = this.state.user ?  <UserApp user={ this.state.user } getCurrentUserFromServer={this.getCurrentUserFromServer} loadHugsFromServer={this.loadHugsFromServer} /> : null;
    var activeUser = this.state.user ? <Intro user={ this.state.user } /> : null;

    return (

      <div className="container col-lg-12">
      <Notifier>
        <div className="row">
          <Intro user={ this.state.user } />
        </div>
          <div className='row'>
      	     { userApp }
      	     { hugListData } 
          </div>
          <div className="row">
            <AllHugsMap hugArray={this.state.hugArray} />
          </div>
          </Notifier>
        <Footer />
      </div>
      
      );
  }
});

ReactDom.render(
  <HugApp />, document.getElementById('app')
);