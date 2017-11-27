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
const ReviewsWrapper = styled.div`
height: 400px;
overflow: auto;
padding: 0 25px 0 10px;
`;
const location = () => (
  <div>
    <LocationWrapper>
      <ImageShow data={images} />
      <Menu grid="2fr" />
      <ReviewsWrapper>
        <ReviewList data={reviews} />
      </ReviewsWrapper>
    </LocationWrapper>
  </div>
);

export default location;
