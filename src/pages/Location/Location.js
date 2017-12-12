import React, { Component } from 'react';
import { Main, Header, Left, Right, BottomLeft, BottomRight } from './Location.styles';
import ImageShow from '../../components/ImageShow/ImageShow';
import ReviewList from '../../components/Reviews/ReviewList';
import images from './images';
import reviews from './reviews';

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

export default Location;
