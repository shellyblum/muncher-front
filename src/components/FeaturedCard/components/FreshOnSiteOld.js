import React from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';
import { rightIconMenu } from './freshOnSite.styled';

const FreshOnSite = ({ data }) => (
  <List>
    <Subheader>Today</Subheader>
    {data.map(item => (
      <div key={item.title}>
        <ListItem
          leftAvatar={<Avatar src={item.image} />}
          primaryText={item.title}
          secondaryText={item.text}
          secondaryTextLines={2}
          rightIconButton={rightIconMenu}
        />
        <Divider inset />
      </div>
    ))}
  </List>
);

export default FreshOnSite;

FreshOnSite.propTypes = {
  data: PropTypes.arrayOf(Object)
};

FreshOnSite.defaultProps = {
  data: [
    {
      image: 'https://www.equalserving.com/images/es1scplugin/image-not-available.png',
      title: 'Title not available',
      text: 'Text not available',
      action: '🚫'
    }
  ]
};
