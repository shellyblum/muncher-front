import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  background: white;
  display: grid;
  grid-template-areas: 'amount icon' 'subTitle icon';
  grid-template-rows: 0fr;
  padding: 1em;
  box-shadow: 0 0 10px lightgray;
  margin: 1em;
  grid-area: ${({ gridArea }) => gridArea};
  border-left: 5px solid ${({ color }) => color};
`;
const DashBoardCard = props => {
  // console.log(props.children);
  const { gridArea, color } = props;
  return (
    <Card gridArea={gridArea} color={color}>
      {props.children}
    </Card>
  );
};

DashBoardCard.propTypes = {
  gridArea: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.element.isRequired
};
DashBoardCard.defaultProps = {
  color: 'blue'
};

export default DashBoardCard;
