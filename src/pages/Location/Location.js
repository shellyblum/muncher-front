import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu/Menu';
import ImageShow from '../../components/ImageShow/ImageShow';
import ReviewList from '../../components/Reviews/ReviewList';
import image from './image';
import review from './review';

const LocationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  padding: 1rem;
`;

console.log(image);
console.log(review);
const location = () => (
  <div>
    <LocationWrapper>
      <ImageShow data={image.images} />
      <Menu grid="2fr" />
      <ReviewList data={review.reviews} />
    </LocationWrapper>
  </div>
);

export default location;
