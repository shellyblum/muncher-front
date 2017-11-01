import React from 'react';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';
import { rightIconMenu } from './featuredRest.styled';

const FeaturedRest = ({ data }) => (
  <div>
    <List>
      <Subheader>Today</Subheader>
      {data.map(item => (
        <div key={item.title}>
          <ListItem
            leftAvatar={<Avatar src={item.image} />}
            rightIconButton={rightIconMenu}
            primaryText={item.title}
            secondaryText={item.text}
            secondaryTextLines={2}
          />
          <Divider inset />
        </div>
      ))}
    </List>
  </div>
);

export default FeaturedRest;

FeaturedRest.propTypes = {
  data: PropTypes.arrayOf(Object)
};

FeaturedRest.defaultProps = {
  data: [
    {
      image:
        'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
      title: 'Title not available',
      text: 'Text not available',
      action: '🚫'
    }
  ]
};
