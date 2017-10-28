import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const HoverEffect = styled.div`
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  }
`;

const CardWithImage = ({ image, title, subtitle, text, avatar, action }) => (
  <HoverEffect>
    <Card>
      <CardHeader title={title} subtitle={subtitle} avatar={avatar} />
      <CardMedia>
        <img src={image} alt={title} />
      </CardMedia>
      <CardText>{text}</CardText>
      <CardActions>
        <FlatButton label={action} />
      </CardActions>
    </Card>
  </HoverEffect>
);

CardWithImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  avatar: PropTypes.string,
  action: PropTypes.string
};

CardWithImage.defaultProps = {
  image: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
  title: 'Title unavailable',
  subtitle: 'Subtitle unavailable',
  text: 'Text unavailable',
  avatar: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
  action: 'Action button'
};

export default CardWithImage;
