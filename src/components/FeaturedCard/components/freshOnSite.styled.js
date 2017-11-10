import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import { grey400 } from 'material-ui/styles/colors';

export const iconButtonElement = (
  <IconButton touch tooltip="more" tooltipPosition="bottom-left">
    <MoreVertIcon color={grey400} />
  </IconButton>
);

export const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Go to restaurant</MenuItem>
    <MenuItem>Add to favorites</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);
