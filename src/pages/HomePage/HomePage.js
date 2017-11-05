import React, { Component } from 'react';
import GridListCards from '../../components/GridListCards/GridListCards';
import { Main, Search, Left } from './HomePage.styles';
import data from './data';
import Filter from '../../components/Filter/filter';
import BottomLeft from '../../components/FeaturedCard/FeaturedCard';

class HomePage extends Component {
  constructor() {
    super();
    const filteredCards = data.cards;
    const { cards } = data;
    this.state = { cards, filteredCards };
    this.updateFilterCards = this.updateFilterCards.bind(this);
  }

  updateFilterCards(fl) {
    this.setState({ filteredCards: fl });
  }

  render() {
    const { filteredCards, cards } = this.state;
    return (
      <div>
        <Main>
          <Search gridArea="search">
            <Filter
              cards={cards}
              filteredCards={filteredCards}
              updateFilterCards={this.updateFilterCards}
            />
          </Search>
          <Left gridArea="left">Images thumbnail? what we are putting here?</Left>
          <GridListCards filteredCards={filteredCards} {...data} />
          <BottomLeft gridArea="bottomLeft">Title component here</BottomLeft>
        </Main>
      </div>
    );
  }
}

export default HomePage;
