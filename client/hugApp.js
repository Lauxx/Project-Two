//  HugApp
//     HomePage(Logo/Carousel/Quotes)
//     UserData
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
var UserData = require('./userComps/userData');

require('./stylesheets/main.scss');

var HugApp = React.createClass({

  getInitialState: function(){
    return {
      hugArray: [],
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

  componentDidMount: function(){
    this.loadHugsFromServer()
  },

  render: function() {
    var hugListData = this.state.hugArray ? <HugListData hugArray={this.state.hugArray} loadHugsFromServer={this.loadHugsFromServer} /> : null;
    return (
      <div>
      	<Home />
      	<UserData loadHugsFromServer={this.loadHugsFromServer} />
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