import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';
import PropTypes from 'prop-types';
import 'antd/lib/timeline/style/css';
import Review from './Review';

const ImageWrapp = styled.img`
height: 30px;
width: 30px;
background-color: #d7e4ed;
border-radius:30px;
border: 1px solid #108ee9;
`;
function ReviewList({ data }) {
  const Reviews = data.map((review) =>
    <Timeline.Item key={review.title} dot={<ImageWrapp src={review.image} />}><Review {...review} /></Timeline.Item>);
  return (
    <div>
      <h1>Reviews</h1>
      <Timeline pending={<a href="#">See more</a>}>
        {Reviews}
      </Timeline>
    </div>
  );
}

ReviewList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string
  }).isRequired).isRequired
};

export default ReviewList;
