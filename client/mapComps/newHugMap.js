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


class NewHugMap extends React.Component {
  constructor (props){
    super(props);
    this.state = { center: {lat: 46.8787, lng: -114.000} }
  }

  render() {
    const onMarkerMoved = this.props.onMarkerMoved;
    const center = this.state.center;
    return (
      <MapLoader>
        <GoogleMap
          defaultZoom={14}
          onCenterChanged={() => console.log('center changed')}
          center={center}
        >
          <Marker 
            position={ this.props.value }
            draggable={true}
            onDragend={ (event) => {
              const lat = event.latLng.lat();
              const lng = event.latLng.lng();
              this.setState({
                center: {lat, lng}
              });
              onMarkerMoved(lat, lng); 
            }}
            icon={'img/heart.png'} />
        </GoogleMap>
      </MapLoader>
    )
  }
}

NewHugMap.propTypes = {
  onMarkerMoved: React.PropTypes.func.isRequired
};

module.exports = NewHugMap;