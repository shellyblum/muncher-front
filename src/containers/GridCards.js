import 'antd/lib/card/style/css';
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { connect } from 'react-redux';
import LocationCard from '../components/LocationCard/LocationCard';

const connectedGridCards = ({ filteredCards }) => (
  <Card
    id="cardWrapper"
    style={{ scrollBehavior: 'smooth', height: 'calc(100vh - 112px)', overflowY: 'scroll' }}
    bordered={false}
    noHovering
  >
    {filteredCards.map(tile => (
      <Card.Grid
        key={tile.id}
        style={{ width: '30%', textAlign: 'center', padding: '0px', margin: '0 5px 10px 5px' }}
      >
        <LocationCard
          id={tile.id}
          key={tile.id}
          {...tile}
        />
      </Card.Grid>
    ))}
  </Card>
);

connectedGridCards.propTypes = {
  // disable lint for now
  /* eslint-disable react/forbid-prop-types */
  filteredCards: PropTypes.array.isRequired
};

const mapStateToProps = ({ location }) => {
  const { filteredCards } = location;
  return {
    filteredCards
  };
};

export default connect(mapStateToProps, null)(connectedGridCards);

