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
    containerElement: <div style={{ height: '450px' }} />,
    mapElement: <div style={{ height: '100%', position: 'fixed' }} />
  }),
  withHandlers({}),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={4} defaultCenter={{ lat: props.lat, lng: props.lng }}>
    {props.markers.map(marker => (
      <Marker
        onClick={(e) => props.onMarkerClick(marker.id, e)}
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

const MapWithMarkers = ({ onMarkerClick, dataMarkers, lat, lng, height }) => (
  <MapWithAMarkerClusterer
    onMarkerClick={onMarkerClick}
    markers={dataMarkers}
    lat={lat}
    lng={lng}
    height={height}
  />
);

MapWithMarkers.propTypes = {
  dataMarkers: PropTypes.arrayOf(Object).isRequired,
  onMarkerClick: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default MapWithMarkers;
