import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { red100, deepPurple100 } from 'material-ui/styles/colors';
import {
  HoverEffect,
  styleCardText,
  styleFlatButton,
  styleCard
} from '../CardWithImage/CardWithImage.styled';

const CardWithImage = ({ id, image, title, text, action, lat, lng, selected, toggleCTADialog }) => (
  <HoverEffect selected={selected}>
    <Card style={styleCard}>
      <CardText style={styleCardText}>{title}</CardText>
      <CardMedia>
        <img src={image} alt={title} />
      </CardMedia>
      <CardText>{text}</CardText>
      <CardActions style={styleFlatButton}>
        <FlatButton
          primary
          hoverColor={red100}
          label={action}
          onClick={() => toggleCTADialog(id)}
        />
        <FlatButton primary hoverColor={deepPurple100} label="Map" />
      </CardActions>
      <button onClick={() => {}}>
        {lat} ,{lng},{id}
      </button>
    </Card>
  </HoverEffect>
);

CardWithImage.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.string,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  selected: PropTypes.string,
  toggleCTADialog: PropTypes.func
};

CardWithImage.defaultProps = {
  image: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
  title: 'Title unavailable',
  text: 'Text unavailable',
  action: 'Action button',
  selected: null,
  toggleCTADialog: () => null
};

export default CardWithImage;
