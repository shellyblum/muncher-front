import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu/Menu';
import ImageShow from '../../components/ImageShow/ImageShow';
import images from './images';

const LocationWrapper = styled.div`
display:grid;
grid-template-columns:  2fr 1fr;
grid-gap: 1rem;
padding : 1rem;
`;

const location = () => (
  <div>
    <LocationWrapper>
      <ImageShow data={images} />
      <Menu grid="400px" />
    </LocationWrapper>
  </div>
);

export default location;
