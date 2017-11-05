import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const ImageWrapp = styled.img`
width:100%;
`;


function Image({ data, click }) {
  return (
    <div>
      <ImageWrapp src={data.image} onClick={click} alt={data.alt} />
    </div>
  );
}
export default Image;

// Image.propTypes = {
//   // data: PropTypes.object.isRequired,
//   click: PropTypes.func.isRequired
// };
