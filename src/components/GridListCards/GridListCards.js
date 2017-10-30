import React from 'react';
import PropTypes from 'prop-types';

import Grid from './GridListCards.styled';

import CardWithImage from '../CardWithImage/CardWithImage';

const GridListCards = ({ gridColumns, gridArea, cards }) => (
  <Grid gridColumns={gridColumns} gridArea={gridArea}>
    {cards.map(tile => <CardWithImage {...tile} />)}
  </Grid>
);

GridListCards.propTypes = {
  gridColumns: PropTypes.number,
  gridArea: PropTypes.string,
  cards: PropTypes.arrayOf(Object)
};

GridListCards.defaultProps = {
  gridColumns: 3,
  gridArea: 'right',
  cards: [{}]
};

export default GridListCards;
