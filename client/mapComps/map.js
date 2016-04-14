 'use strict';

import React from 'react'
//import styles from '../../stylesheets/map-styles'
import { GoogleMap, Marker } from 'react-google-maps'
import MapLoader from './mapLoader'

export default (props) => {
  return (
    <MapLoader>
      <GoogleMap
        defaultZoom={14}
        center={{lat: 46.8787, lng: -114.000}}
      >
        <Marker position={{lat: 0, lng: 0}} onClick={() => alert('hello world')} />
      </GoogleMap>
    </MapLoader>
  )
};