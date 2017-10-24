import React from 'react';
import styled from 'styled-components';
import LoginDialog from '../../containers/login';
import logo from '../../assets/images/flat-51-128.png';

const HeaderStyle = styled.header`
  padding: 1em;
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  color: #cb0067;
  margin: 0 1em;
`;
const Header = () => (
  <HeaderStyle>
    <img src={logo} style={{ width: '50px' }} alt="logo" />
    <Title>Muncher</Title>
    <LoginDialog />
  </HeaderStyle>
);
export default Header;
