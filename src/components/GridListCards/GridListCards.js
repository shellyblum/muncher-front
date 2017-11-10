import React from 'react';
import PropTypes from 'prop-types';

import Grid from './GridListCards.styled';

import CardWithImage from '../CardWithImage/CardWithImage';

const GridListCards = ({ gridColumns, gridArea, filteredCards, toggleCTADialog }) => (
  <Grid gridColumns={gridColumns} gridArea={gridArea}>
    {filteredCards.map(tile => (
      <CardWithImage key={tile.title} {...tile} toggleCTADialog={toggleCTADialog} />
    ))}
  </Grid>
);

GridListCards.defaultProps = {
  gridColumns: 3,
  gridArea: 'right'
};

GridListCards.propTypes = {
  gridColumns: PropTypes.number,
  gridArea: PropTypes.string,
  filteredCards: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.string,
    city: PropTypes.string,
    orderType: PropTypes.arrayOf(PropTypes.string),
    lng: PropTypes.number,
    lat: PropTypes.number
  })).isRequired
};
export default GridListCards;
