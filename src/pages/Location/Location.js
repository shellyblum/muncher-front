import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu/Menu';
import ImageShow from '../../components/ImageShow/ImageShow';
import ReviewList from '../../components/Reviews/ReviewList';
import images from './images';
import reviews from './reviews';

const LocationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  padding: 1rem;
`;

console.log(images);
console.log(reviews);
const location = () => (
  <div>
    <LocationWrapper>
      <ImageShow data={images} />
      <Menu grid="2fr" />
      <ReviewList data={reviews} />
    </LocationWrapper>
  </div>
);

export default location;
