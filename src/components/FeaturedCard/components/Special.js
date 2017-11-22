import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const Special = ({ data }) => (
  <Card title={data.title} extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>{data.text}</p>
  </Card>
);

/* <Card>
    <CardHeader
      title=
      subtitle={data.subtitle}
      avatar={data.image}
    />
    <CardTitle title={data.title} subtitle={data.subtitle} />
    <CardText>{data.text}</CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card> */

export default Special;

Special.propTypes = {
  data: PropTypes.objectOf(String)
};

Special.defaultProps = {
  data: ''
};
