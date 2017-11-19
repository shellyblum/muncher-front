import React from 'react';
import PropTypes from 'prop-types';

import { SelectEffect } from '../CardWithImage/CardWithImage.styled';

const CardWithImage = ({ id, image, title, text, action, selected, toggleCTADialog }) => (
  <SelectEffect selected={selected}>
    <h3>{title}</h3>
    <div className="custom-image">
      <img alt={title} width="100%" src={image} />
    </div>
    <div className="custom-card">
      <p>{text}</p>
    </div>
    <button onClick={() => toggleCTADialog(id)}> {action} </button>
    <button
      onClick={e => {
        console.log(e.target);
      }}
    >
      Show on map
    </button>
  </SelectEffect>
);

CardWithImage.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.string,
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
