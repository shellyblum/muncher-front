import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import LoginDialog from '../../containers/Login';
import logo from '../../assets/images/flat-51-128.png';
import { HeaderStyle, Title, Nav, NavItem } from './Header.styles';

const Header = () => (
  <HeaderStyle>
    <Nav>
      <NavItem>
        <img src={logo} style={{ width: '50px' }} alt="logo" />
      </NavItem>
      <NavItem>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Title>Muncher</Title>
        </Link>
      </NavItem>
    </Nav>
    <Nav>
      <NavItem>
        <LoginDialog />
      </NavItem>

      <NavItem>
        <Link to="dashboard">
          <RaisedButton label="Owner Zone" backgroundColor="#a4c639" />
        </Link>
      </NavItem>

      <NavItem>
        <RaisedButton
          href="https://github.com/Alaev/muncher-front"
          target="_blank"
          secondary
          style={{ fontSize: '30px' }}
        >
          <i
            className="fa fa-github"
            aria-hidden="true"
            style={{ color: 'white' }}
          />
        </RaisedButton>
      </NavItem>
    </Nav>
  </HeaderStyle>
);
export default Header;
