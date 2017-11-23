import React, { Component } from 'react';
import GridCards from '../../components/GridCards/GridCards';
import { Main, Search, Left, Right } from './HomePage.styles';
import data from './data';
import MapWithMarkers from '../../components/Maps/MapWithMarkers';
import Filter from '../../components/Filter/filter';
import BottomLeft from '../../components/FeaturedCard/FeaturedCard';
import CallToActionDialog from '../../components/CallToActionDialog/CallToActionDialog';

class HomePage extends Component {
  state = {
    cards: data.cards,
    filteredCards: data.cards,
    toggleCTADialog: false,
    selectedRest: {}
  };

  onMarkerClick = cardId => {
    this.selectCard(cardId);
  };

  selectCard = (isSelected, borderType = '#d3d3d3') => {
    const { filteredCards } = this.state;
    const selectedCard = filteredCards.map(card =>
      (card.id === isSelected ? { ...card, selected: borderType } : { ...card, selected: null }));
    this.setState({ filteredCards: selectedCard });
  };

  applyStyle = id => {
    if (this.state.isSelected === id);
  };

  updateFilterCards = filteredCards => {
    this.setState({ filteredCards });
  };

  toggleCTADialog = restId => {
    const previousState = this.state.toggleCTADialog;
    this.setState({ toggleCTADialog: !previousState });
    this.findRestById(restId);
  };

  findRestById = restId => {
    const selectedRest = this.state.filteredCards.find(rest => rest.id === restId);
    this.setState({ selectedRest });
  };

  render() {
    const { filteredCards, cards } = this.state;

    return (
      <div>
        <Main>
          <Search gridArea="search">
            <Filter
              cards={cards}
              updateFilterCards={this.updateFilterCards}
            />
          </Search>
          <Right gridArea="right">
            <GridCards filteredCards={filteredCards} toggleCTADialog={this.toggleCTADialog} />
            <CallToActionDialog
              selectedRest={this.state.selectedRest}
              open={this.state.toggleCTADialog}
              toggleCTADialog={this.toggleCTADialog}
            />
          </Right>
          <Left gridArea="left">
            <MapWithMarkers
              onMarkerClick={this.onMarkerClick}
              dataMarkers={data.cards}
              height={150}
              lat={34}
              lng={32}
            />
          </Left>
          <BottomLeft gridArea="bottomLeft">Title component here</BottomLeft>
        </Main>
      </div>
    );
  }
}

export default HomePage;
