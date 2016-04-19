

var React = require('react');
var GoogleMap = require('react-google-maps');
var Marker = require('react-google-maps');
var MapLoader = require('./mapLoader');






function ScriptjsLoader (props) {
  return (
    <MapLoader>
      <GoogleMap
        defaultZoom={14}
        center={{lat: 46.8787, lng: -114.000}}
      >
        <Marker position={{lat: 46.8787, lng: -114.000}} onClick={() => alert('hello world')} />
      </GoogleMap>
    </MapLoader>
  )
};

module.exports = ScriptjsLoader;