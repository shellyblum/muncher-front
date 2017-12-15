import 'antd/lib/card/style/css';
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import LocationCard from '../LocationCard/LocationCard';

const GridCards = ({ filteredCards, toggleCTADialog, redirectToLocation, onCardClick }) => (
  <Card
    id="cardWrapper"
    style={{ scrollBehavior: 'smooth', height: 'calc(100vh - 112px)', overflowY: 'scroll' }}
    bordered={false}
  >
    {filteredCards.map(tile => (
      <Card.Grid
        key={tile.title}
        style={{ width: '30%', textAlign: 'center', padding: '0px', margin: '0 5px 10px 5px' }}
      >
        <LocationCard
          id={tile.id}
          key={tile.title}
          {...tile}
          toggleCTADialog={toggleCTADialog}
          redirectToLocation={redirectToLocation}
          onCardClick={onCardClick}
        />
      </Card.Grid>
    ))}
  </Card>
);

GridCards.propTypes = {
  toggleCTADialog: PropTypes.func,
  redirectToLocation: PropTypes.func,
  onCardClick: PropTypes.func,
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

GridCards.defaultProps = {
  toggleCTADialog: () => null,
  redirectToLocation: () => null,
  onCardClick: () => null
};

export default GridCards;
