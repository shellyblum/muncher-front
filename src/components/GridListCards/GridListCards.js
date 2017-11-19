import 'antd/dist/antd.css';

import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';

import CardWithImage from '../CardWithImage/CardWithImage';

const GridListCards = ({ filteredCards, toggleCTADialog }) => (
  <Card bordered={false} noHovering>
    {filteredCards.map(tile => (
      <Card.Grid
        key={tile.title}
        style={{ width: '30%', textAlign: 'center', padding: '0px', margin: '0 5px 10px 5px' }}
      >
        <CardWithImage {...tile} toggleCTADialog={toggleCTADialog} />
      </Card.Grid>
    ))}
  </Card>
);

GridListCards.propTypes = {
  toggleCTADialog: PropTypes.func,
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
  toggleCTADialog: () => null
};

export default GridListCards;
