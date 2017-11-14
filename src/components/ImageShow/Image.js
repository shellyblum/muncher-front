import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

const ImageWrapp = styled.img`
  width:100%;
  &:hover {
    box-shadow: 0 0 1px blue ,0 0 1px blue;
  }
`;


function Image({ data, click }) {
  return (
    <div>
      <ImageWrapp src={data.image} onClick={click} alt={data.alt} data-tip data-for={data.discription} />
      <ReactTooltip id={data.discription} effect="solid" place="bottom">
        <p>{data.discription}</p>
      </ReactTooltip>
    </div>
  );
}
export default Image;

Image.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
    discription: PropTypes.string
  }).isRequired,
  click: PropTypes.func.isRequired
};
