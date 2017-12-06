import { withRouter } from 'react-router-dom';
import React from 'react';
import { Content, Paragraph } from './LocationCard.styled';

const CardContent = withRouter(({ history, id, title, text, image, redirectToLocation }) => (
  <Content onClick={() => redirectToLocation(history, id)}>
    <h3>{title}</h3>
    <img alt={title} width="100%" src={image} />
    <Paragraph>{text}</Paragraph>
  </Content>
));
export default CardContent;
