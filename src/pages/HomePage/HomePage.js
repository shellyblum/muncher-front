import React, { Component } from 'react';
import GridListCards from '../../components/GridListCards/GridListCards';
import { Main, Search, Left } from './HomePage.styles';
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
    this.showInfoBox(cardId);
  };

  showOnMap = restId => {
    this.selectCard(restId);
    // console.log(this.state.filteredCards[restId].selected);
    this.showInfoBox(restId);
  };

  selectCard = async (isSelected, borderType = '1px solid black') => {
    console.log(isSelected);
    // const { filteredCards } = this.state;
    const selectedCard = this.state.filteredCards.map(card => (card.id === isSelected ? { ...card, selected: borderType } : { ...card, selected: null }));
    console.log(selectedCard);
    await this.setState({ filteredCards: selectedCard });
    console.log(this.state.filteredCards);
  };

  showInfoBox = id => {
    const { filteredCards } = this.state;
    const newState = filteredCards.map(card => (card.id === id ? { ...card, showInfo: !card.showInfo } : { ...card, showInfo: false }));
    this.setState({ filteredCards: newState });
    // console.log(this.state.filteredCards[id].showInfo);
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
            <Filter cards={cards} filteredCards={filteredCards} updateFilterCards={this.updateFilterCards} />
          </Search>
          <GridListCards
            filteredCards={filteredCards}
            toggleCTADialog={this.toggleCTADialog}
            showOnMap={this.showOnMap}
          />
          <CallToActionDialog
            selectedRest={this.state.selectedRest}
            open={this.state.toggleCTADialog}
            toggleCTADialog={this.toggleCTADialog}
          />
          <Left gridArea="left">
            <MapWithMarkers
              onMarkerClick={this.onMarkerClick}
              dataMarkers={this.state.filteredCards}
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
