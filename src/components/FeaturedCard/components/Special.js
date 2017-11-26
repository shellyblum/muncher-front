import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import 'antd/lib/card/style/css';

const Special = ({ data }) => (
  <Card title={data.title} extra={<a href="">More</a>} bodyStyle={{ padding: 0 }} style={{ width: 300 }}>
    <div className="custom-image">
      <img src={data.image} width="100%" alt="special" />
    </div>
    <div className="custom-card">
      <h3>{data.subtitle}</h3>
      <p>{data.text}</p>
    </div>
  </Card>
);

export default Special;

Special.propTypes = {
  data: PropTypes.objectOf(String)
};

Special.defaultProps = {
  data: ''
};
