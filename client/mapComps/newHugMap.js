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
var MapLoader = require('./mapLoader');
import { GoogleMap, Marker } from 'react-google-maps'

function NewHugMap (props) {
  const onMarkerMoved = props.onMarkerMoved;

  return (
    <MapLoader>
      <GoogleMap
        defaultZoom={14}
        center={{lat: 46.8787, lng: -114.000}}
      >
        <Marker 
          position={ props.value }
          draggable={true}
          onDragend={ (event) => onMarkerMoved(event.latLng.lat(), event.latLng.lng()) }
        />
      </GoogleMap>
    </MapLoader>
  )
};

NewHugMap.propTypes = {
  onMarkerMoved: React.PropTypes.func.isRequired
};

module.exports = NewHugMap;