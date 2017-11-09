import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

const Header = props => (
  <AppBar
    title="Restaurant Admin"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={props.onNavClick}
  />
);

Header.propTypes = {
  onNavClick: PropTypes.func.isRequired
};

export default Header;
