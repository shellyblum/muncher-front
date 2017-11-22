import React from 'react';
import PropTypes from 'prop-types';

import Grid from './GridListCards.styled';

import CardWithImage from '../CardWithImage/CardWithImage';

const GridListCards = ({ gridColumns, gridArea, filteredCards, toggleCTADialog, onMarkerClick }) => (
  <Grid gridColumns={gridColumns} gridArea={gridArea}>
    {filteredCards.map(tile => (
      <CardWithImage id={tile.id} key={tile.title} {...tile} onMarkerClick={onMarkerClick} toggleCTADialog={toggleCTADialog} />
    ))}
  </Grid>
);

GridListCards.propTypes = {
  gridColumns: PropTypes.number,
  gridArea: PropTypes.string,
  toggleCTADialog: PropTypes.func,
  onMarkerClick: PropTypes.func,
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

GridListCards.defaultProps = {
  gridColumns: 3,
  gridArea: 'right',
  toggleCTADialog: () => null,
  onMarkerClick: () => null
};

export default GridListCards;
