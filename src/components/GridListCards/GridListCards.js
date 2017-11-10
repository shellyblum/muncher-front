import React from 'react';
import PropTypes from 'prop-types';

import Grid from './GridListCards.styled';

import CardWithImage from '../CardWithImage/CardWithImage';

const GridListCards = ({ gridColumns, gridArea, cards, toggleYourSelf }) => (
  //
  <Grid gridColumns={gridColumns} gridArea={gridArea}>
    { cards.map(tile => <CardWithImage key={tile.id} toggleYourSelf={toggleYourSelf} {...tile} />) }
  </Grid>
);

GridListCards.propTypes = {
  gridColumns: PropTypes.number,
  gridArea: PropTypes.string,
  cards: PropTypes.arrayOf(Object),
  toggleYourSelf: PropTypes.func.isRequired
};

GridListCards.defaultProps = {
  gridColumns: 3,
  gridArea: 'right',
  cards: [
    {
      image: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
      title: 'Title not available',
      text: 'Text not available',
      action: '🚫'
    }
  ]
};

export default GridListCards;
