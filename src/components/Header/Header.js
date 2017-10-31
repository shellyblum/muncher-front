import React from 'react';
import LoginDialog from '../../containers/Login';
import logo from '../../assets/images/flat-51-128.png';
import { HeaderStyle, Title } from './Header.styles';

const Header = () => (
  <HeaderStyle>
    <img src={logo} style={{ width: '50px' }} alt="logo" />
    <Title>Muncher</Title>
    <LoginDialog />
  </HeaderStyle>
);
export default Header;
