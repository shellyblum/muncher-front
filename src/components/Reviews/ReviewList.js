import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewsWrapper = styled.div`
position: relative;
width:3fr;
&:before {
  content: '';
  position: absolute;
  left: 30px;
  height: 100%;
  width: 4px;
  background: #d7e4ed;
}
`;
function ReviewList({ data }) {
  const Reviews = data.map((review) => <Review key={data.title} data={review} />);
  return (
    <div>
      <h1>Reviews</h1>
      <ReviewsWrapper>
        {Reviews}
      </ReviewsWrapper>
    </div>
  );
}
export default ReviewList;
ReviewList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string
  }).isRequired).isRequired
};
