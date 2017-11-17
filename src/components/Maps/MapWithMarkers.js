import React from 'react';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import PropTypes from 'prop-types';
import { compose, withProps, withHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '450px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withHandlers({}),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={4} defaultCenter={{ lat: props.lat, lng: props.lng }}>
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          onClick={() => props.onMarkerClick(marker.id)}
          key={marker.title}
          position={{ lat: marker.lat, lng: marker.lng }}
          title={marker.title}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

class MapWithMarkers extends React.PureComponent {
  state = {
    markers: this.props.dataMarkers,
    height: this.props.height,
    lat: this.props.lat,
    lng: this.props.lng
  };

  render() {
    return (
      <MapWithAMarkerClusterer
        onMarkerClick={this.props.onMarkerClick}
        markers={this.state.markers}
        lat={this.state.lat}
        lng={this.state.lng}
        height={this.state.height}
      />
    );
  }
}

MapWithMarkers.propTypes = {
  dataMarkers: PropTypes.arrayOf(Object).isRequired,
  onMarkerClick: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default MapWithMarkers;
