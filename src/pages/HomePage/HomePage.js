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

  onMarkerClick = (cardId, e) => {
    this.selectCard(cardId);
    this.showInfoBox(cardId);
    this.scroll(cardId, e);
  };

  scroll = (cardId, elementHeight) => {
    console.log(elementHeight);
    window.scroll({
      top: elementHeight,
      Left: 0,
      behavior: 'smooth'
    });
  };
  showOnMap = (e, restId) => {
    this.selectCard(restId);
    this.showInfoBox(restId);
    const x = e.target.parentElement;
    x.scrollIntoView({ inline: 'start', behavior: 'smooth' });
  };

  selectCard = async (isSelected, borderType = '1px solid black') => {
    const { filteredCards } = this.state;
    const selectedCard = filteredCards.map(card => (card.id === isSelected ? { ...card, selected: borderType } : { ...card, selected: null }));
    await this.setState({ filteredCards: selectedCard });
  };

  showInfoBox = id => {
    const { filteredCards } = this.state;
    const newState = filteredCards.map(card => (card.id === id ? { ...card, showInfo: !card.showInfo } : { ...card, showInfo: false }));
    this.setState({ filteredCards: newState });
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
