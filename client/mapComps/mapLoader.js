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
var ScriptjsLoader = require('react-google-maps/lib/async/ScriptjsLoader');

function MapLoader (props) {
  return (
    <ScriptjsLoader
      hostname={"maps.googleapis.com"}
      pathname={"/maps/api/js"}
      query={ {
        v: 3.24,
        key: 'AIzaSyBJj27CHuv0PDk7y1qgsUodrWM3HCJyv4A',
        libraries: "geometry,drawing,places"
      } }
      loadingElement={
        <div>
          <i className="fa fa-spinner" aria-hidden="true"></i>
        </div>
      }

      containerElement={
        <div id="google-map-container" />
      }
      googleMapElement={ props.children }
    />
  )
};  

module.exports = MapLoader;