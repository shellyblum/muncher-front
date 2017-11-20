import React from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';
import 'antd/lib/tooltip/style/css';
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
      <Tooltip placement="topRight" title={data.discription}>
        <ImageWrapp src={data.image} onClick={click} alt={data.alt} />
      </Tooltip>
    </div>
  );
}

Image.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
    discription: PropTypes.string
  }).isRequired,
  click: PropTypes.func.isRequired
};

export default Image;
