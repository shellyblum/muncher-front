import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ReviewWrapper = styled.div`
  margin-top: 2em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 10px;
  margin-left: 10px;
`;

function Review({ title, content, date }) {
  return (
    <div>
      <ReviewWrapper>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{date}</p>
      </ReviewWrapper>
    </div>
  );
}

Review.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired

};

export default Review;
