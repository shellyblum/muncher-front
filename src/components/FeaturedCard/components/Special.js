import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

const Special = ({ data }) => (
  <Card>
    <CardHeader
      title={data.title}
      subtitle={data.subtitle}
      avatar={data.image}
    />
    <CardTitle title={data.title} subtitle={data.subtitle} />
    <CardText>{data.text}</CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default Special;

Special.propTypes = {
  data: PropTypes.objectOf(String).isRequired
};
