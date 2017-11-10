import React, { Component } from 'react';
import GridListCards from '../../components/GridListCards/GridListCards';
import { Main, Search, Left } from './HomePage.styles';
import data from './data';
import MapWithMarkers from '../../components/Maps/MapWithMarkers';
import Filter from '../../components/Filter/filter';
import BottomLeft from '../../components/FeaturedCard/FeaturedCard';

class HomePage extends Component {
  constructor() {
    super();

    const { cards } = data;
    this.state = { cards, filteredCards: cards };
    this.updateFilterCards = this.updateFilterCards.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(cardId) {
    // this.setState({ 's' });
    this.selectCard(cardId);
  }

  selectCard(isSelected) {
    const { filteredCards } = this.state;
    const index = filteredCards.findIndex(card => card.id === isSelected);
    filteredCards[index].selected = filteredCards[index].selected ? '' : '1px solid black';
    this.setState({ filteredCards });
  }

  applyStyle(id) {
    if (this.state.isSelected === id);
  }

  updateFilterCards(filteredCards) {
    this.setState({ filteredCards });
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
          <Left gridArea="left">
            <MapWithMarkers
              onMarkerClick={this.onMarkerClick}
              dataMarkers={data.cards}
              height={150}
              lat={34}
              lng={32}
            />
          </Left>
          <GridListCards filteredCards={filteredCards} />
          <BottomLeft gridArea="bottomLeft">Title component here</BottomLeft>
        </Main>
      </div>
    );
  }
}

export default HomePage;
