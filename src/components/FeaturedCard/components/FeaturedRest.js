import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const style = {
  cardGrid: {
    width: '25%',
    textAlign: 'center'
  }
};

const FeaturedRest = ({ data }) => (
  <Card title="Card Title" noHovering>
    {data.map(item => (
      <Card.Grid style={style.cardGrid}>
        <div className="custom-image">
          <img src={item.image} width="100%" alt="special" />
        </div>
        <div className="custom-card">
          <h3>{item.subtitle}</h3>
          <p>{item.text}</p>
        </div>
      </Card.Grid>
    ))}
  </Card>
);

export default FeaturedRest;

FeaturedRest.propTypes = {
  data: PropTypes.arrayOf(Object)
};

FeaturedRest.defaultProps = {
  data: [
    {
      image: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
      title: 'Title not available',
      text: 'Text not available',
      action: '🚫'
    }
  ]
};
