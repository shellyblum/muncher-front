import React, { Component } from 'react';
import GridListCards from '../../components/GridListCards/GridListCards';
import { Main, Search, Left } from './HomePage.styles';
import data from './data';
import BottomLeft from '../../components/FeaturedCard/FeaturedCard';


class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Main>
          <Search gridArea="search">Search will be here</Search>
          <Left gridArea="left" />
          <GridListCards {...data} />
          <BottomLeft gridArea="bottomLeft">Title component here</BottomLeft>
        </Main>
      </div>
    );
  }
}

export default HomePage;
