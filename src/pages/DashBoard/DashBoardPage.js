import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Navbar from './NavBar';
import DashBoardCard from './DashBoardCard';

const Grid = styled.div`
  padding: 1em;
  background: #edecec;
  display: grid;
  grid-template-areas: 'header header header' 'left-top middle right'
    'left-bottom middle right';
`;
const SubTitle = styled.h3`
  color: lightgray;
`;
const Amount = styled.span`
  font-size: 30px;
`;
const Icon = styled.i`
  font-size: 70px;
  color: ${({ color }) => color};
  grid-area: icon;
  text-align: center;
`;

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { navbarOpen: true };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <div>
        <Header onNavClick={this.toggleNavbar} />
        {this.state.navbarOpen && <Navbar />}
        <Grid>
          <DashBoardCard gridArea="header" color="orange">
            <Amount>500.45</Amount>
            <SubTitle>Total income this Day</SubTitle>
            <Icon color="orange">
              <i className="fa fa-newspaper-o" aria-hidden="true" />
            </Icon>
          </DashBoardCard>
          <DashBoardCard gridArea="middle" color="purple">
            <Amount>32</Amount>
            <SubTitle>Monthly Revenuew</SubTitle>
            <Icon color="purple">
              <i className="fa fa-usd" aria-hidden="true" />
            </Icon>
          </DashBoardCard>
          <DashBoardCard gridArea="right" color="red">
            <Amount>3</Amount>
            <SubTitle>New Orders</SubTitle>
            <Icon color="red">
              <i className="fa fa-shopping-cart" aria-hidden="true" />
            </Icon>
          </DashBoardCard>
          <DashBoardCard gridArea="left-top" color="green">
            <Amount>2</Amount>
            <SubTitle>Pending Reviews</SubTitle>
            <Icon color="green">
              <i className="fa fa-commenting-o" aria-hidden="true" />
            </Icon>
          </DashBoardCard>

          <DashBoardCard gridArea="left-bottom" color="skyblue">
            <Amount>10</Amount>
            <SubTitle>New Customers</SubTitle>
            <Icon color="skyblue">
              <i className="fa fa-user-plus" aria-hidden="true" />
            </Icon>
          </DashBoardCard>
        </Grid>
      </div>
    );
  }
}

export default DashBoard;
