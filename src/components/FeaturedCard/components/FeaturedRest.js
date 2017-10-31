import React from 'react';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';

const iconButtonElement = (
  <IconButton touch tooltip="more" tooltipPosition="bottom-left">
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Go to restaurant</MenuItem>
    <MenuItem>Make reservation</MenuItem>
    <MenuItem>Share</MenuItem>
  </IconMenu>
);

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
  data: PropTypes.arrayOf(Object).isRequired
};
