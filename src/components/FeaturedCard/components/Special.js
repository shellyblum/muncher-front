import React from 'react';
import PropTypes from 'prop-types';
// import { Card } from 'antd';
// import 'antd/lib/card/style/css';
import styled from 'styled-components';
import LocationCard from '../../LocationCard/LocationCard';
// const customStyles = {
//   card: { width: '95%', body: { padding: 0 } }
// };

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SubTitle = styled.h3`
  margin-top: 10px;
  padding-left: 20px;
`;

const Paragraph = styled.p`
  margin-top: 20px;
  padding-left: 5px;
`;

const Special = ({ tile }) => (
  <Wrapper>
    <LocationCard
      id={tile.id}
      key={tile.title}
      {...tile}
      toggleCTADialog={toggleCTADialog}
      onCardClick={onCardClick}
    />
  </Wrapper>
);

export default Special;

Special.propTypes = {
  data: PropTypes.objectOf(String)
};

Special.defaultProps = {
  data: ''
};

{
  /* <Card
title={data.title}
extra={<a href="">More</a>}
bodyStyle={customStyles.card.body}
style={customStyles.card}
>
<div className="custom-image">
  <img src={data.image} width="95%" alt="muncher special" />
</div>
<div className="custom-card">
  <SubTitle>{data.subtitle}</SubTitle>
  <Paragraph>{data.text}</Paragraph>
</div>
</Card> */
}
