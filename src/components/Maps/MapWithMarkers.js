import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps, withHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%', position: 'fixed' }} />
  }),
  withHandlers({}),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={props.defaultZoom} defaultCenter={{ lat: props.lat, lng: props.lng }}>
    {props.markers.map(marker => (
      <Marker
        onClick={() => props.onMarkerClick(marker.id)}
        key={marker.title}
        position={{ lat: marker.lat, lng: marker.lng }}
        title={marker.title}
      >
        {marker.showInfo && (
          <InfoBox position={{ lat: marker.lat, lng: marker.lng }}>
            <div
              style={{
                backgroundColor: 'salmon',
                padding: '12px',
                borderRadius: '0px 7px 12px 12px'
              }}
            >
              <div style={{ fontSize: '16px', fontColor: '#08233B' }}>{marker.title}</div>
            </div>
          </InfoBox>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

const MapWithMarkers = ({ onMarkerClick, dataMarkers, lat, lng, defaultZoom }) => (
  <MapWithAMarkerClusterer
    onMarkerClick={onMarkerClick}
    defaultZoom={defaultZoom}
    markers={dataMarkers}
    lat={lat}
    lng={lng}
  />
);

MapWithMarkers.propTypes = {
  dataMarkers: PropTypes.arrayOf(Object).isRequired,
  onMarkerClick: PropTypes.func,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  defaultZoom: PropTypes.number.isRequired
};

MapWithMarkers.defaultProps = {
  onMarkerClick: () => null
};

export default MapWithMarkers;
