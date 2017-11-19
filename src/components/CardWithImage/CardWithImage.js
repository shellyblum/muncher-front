import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { red100, deepPurple100 } from 'material-ui/styles/colors';
import { HoverEffect, styleCardText, styleFlatButton, styleCard } from '../CardWithImage/CardWithImage.styled';

const CardWithImage = ({ id, image, title, text, action, selected, toggleCTADialog, showOnMap }) => (
  <HoverEffect selected={selected}>
    <Card style={styleCard}>
      <CardText style={styleCardText}>{title}</CardText>
      <CardMedia>
        <img src={image} alt={title} />
      </CardMedia>
      <CardText>{text}</CardText>
      <CardActions style={styleFlatButton}>
        <FlatButton primary hoverColor={red100} label={action} onClick={() => toggleCTADialog(id)} />
        <FlatButton onClick={(e) => showOnMap(id, e)} primary hoverColor={deepPurple100} label="show on Map" />
        <button
          onClick={e => {
            showOnMap(e, id);
          }}
        >
          button
        </button>
      </CardActions>
    </Card>
  </HoverEffect>
);

CardWithImage.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.string,
  selected: PropTypes.string,
  toggleCTADialog: PropTypes.func,
  showOnMap: PropTypes.func
};

CardWithImage.defaultProps = {
  image: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
  title: 'Title unavailable',
  text: 'Text unavailable',
  action: 'Action button',
  selected: null,
  toggleCTADialog: () => null,
  showOnMap: () => null
};

export default CardWithImage;
