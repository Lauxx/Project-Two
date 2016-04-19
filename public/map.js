var templat;
var templng;

function initMap(category, searchText) {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.8787, lng: -114.000},
    zoom: 14,
    styles: [{
      featureType: 'poi',
      stylers: [{ visibility: 'off' }]  // Turn off points of interest.
    }, {
      featureType: 'transit.station',
      stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
    }],
    disableDoubleClickZoom: false,
    scrollwheel: false
  });
};


