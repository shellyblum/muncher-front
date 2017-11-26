import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import 'antd/lib/card/style/css';

const Special = ({ data }) => (
  <Card title={data.title} extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>{data.text}</p>
  </Card>
);

export default Special;

Special.propTypes = {
  data: PropTypes.objectOf(String)
};

Special.defaultProps = {
  data: ''
};
