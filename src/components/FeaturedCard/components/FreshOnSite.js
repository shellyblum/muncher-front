import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const gridStyle = {
  width: '25%',
  textAlign: 'center'
};

const FeaturedOnSite = ({ data }) => (
  <Card title="Card Title" noHovering>
    {data.map(item => <Card.Grid style={gridStyle}>{item.title}</Card.Grid>)}
  </Card>
);

export default FeaturedOnSite;

FeaturedOnSite.propTypes = {
  data: PropTypes.arrayOf(Object)
};

FeaturedOnSite.defaultProps = {
  data: [
    {
      image: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
      title: 'Title not available',
      text: 'Text not available',
      action: '🚫'
    }
  ]
};
