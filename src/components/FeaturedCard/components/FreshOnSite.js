import React from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';

const iconButtonElement = (
  <IconButton touch tooltip="more" tooltipPosition="bottom-left">
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Go to restaurant</MenuItem>
    <MenuItem>Add to favorites</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

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
  data: PropTypes.arrayOf(Object).isRequired
};
