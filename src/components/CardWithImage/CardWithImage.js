import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { red100 } from 'material-ui/styles/colors';

import {
  HoverEffect,
  styleCardText,
  styleFlatButton,
  styleCard
} from '../CardWithImage/CardWithImage.styled';

const CardWithImage = ({ image, title, text, action, toggleCTADialog }) => (
  <HoverEffect>
    <Card style={styleCard}>
      <CardText style={styleCardText}>{title}</CardText>
      <CardMedia>
        <img src={image} alt={title} />
      </CardMedia>
      <CardText>{text}</CardText>
      <CardActions style={styleFlatButton}>
        {/* <CallToActionDialog label={action} toggleCTADialog={toggleCTADialog} /> */}
        {<FlatButton primary hoverColor={red100} label={action} onClick={toggleCTADialog} />}
      </CardActions>
    </Card>
  </HoverEffect>
);

CardWithImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.string
};

CardWithImage.defaultProps = {
  image: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
  title: 'Title unavailable',
  text: 'Text unavailable',
  action: 'Action button'
};

export default CardWithImage;
