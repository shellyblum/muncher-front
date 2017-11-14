import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageWrapp = styled.img`
  height: 60px;
  width: 60px;
  background-color: #d7e4ed;
  border: 3px solid grey;
  border-radius:30px;
  position: absolute;
  margin-top: 20px;
`;
const ReviewWrapper = styled.div`
  margin-top: 2em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 40px;
  border-radius: 10px;
  margin-left: 100px;
`;


function Review({ data }) {
  return (
    <div>
      <ImageWrapp src={data.image} />
      <ReviewWrapper>
        <h1>{data.title}</h1>
        <p>{data.content} </p>
        <p>{data.date}</p>
      </ReviewWrapper>
    </div>
  );
}
export default Review;

Review.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string
  }).isRequired
};
