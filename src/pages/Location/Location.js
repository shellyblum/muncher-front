import React, { Component } from 'react';
import { Main, Header, Left, Right, BottomLeft, BottomRight } from './Location.styles';
import ImageShow from '../../components/ImageShow/ImageShow';
import ReviewList from '../../components/Reviews/ReviewList';
import LocationAction from '../../components/LocationAction/LocationAction';
import images from './images';
import reviews from './reviews';
import MapWithMarkers from '../../components/Maps/MapWithMarkers';
import data from '../HomePage/data';

class Location extends Component {
  state = {
    // AC Ready
  };

  render() {
    return (
      <Main>
        <Header gridArea="header">Header</Header>
        <Right gridArea="right">Call to action components</Right>
        <Left gridArea="left">
          <ImageShow data={images} />
        </Left>
        <BottomLeft gridArea="bottomLeft">
          <ReviewList data={reviews} />
        </BottomLeft>
        <BottomRight gridArea="bottomRight">Map and direction components</BottomRight>
      </Main>
    );
  }
}

const location = () => {
  const currentLocationId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  const locateLocationById = element => currentLocationId === element.id;
  const myLocation = [data.cards.find(locateLocationById)];

  return (
    <div>
      <LocationWrapper>
        <ImageShow data={images} />
        <Menu grid="2fr" />
        <MapWithMarkers dataMarkers={myLocation} lat={myLocation[0].lat} lng={myLocation[0].lng} defaultZoom={7} />
        <ReviewsWrapper>
          <ReviewList data={reviews} />
        </ReviewsWrapper>
      </LocationWrapper>
    </div>
  );
};

export default Location;
