var React = require('react');
var MapLoader = require('./mapLoader');
import { GoogleMap, Marker } from 'react-google-maps'







function AllHugsMap (props) {
	console.log(props.hugArray);
	var allHugs = props.hugArray.map(function(hug){
		return <Marker position={ {lat: hug.lat, lng: hug.lng} } /> 
	})

  return (
    <MapLoader>
      <GoogleMap
        defaultZoom={14}
        center={{lat: 46.8787, lng: -114.000}}
      >
        { allHugs }
        
      </GoogleMap>
    </MapLoader>
  )
};

module.exports = AllHugsMap;