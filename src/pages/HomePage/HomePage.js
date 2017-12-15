import React, { Component } from 'react';
import GridCards from '../../components/GridCards/GridCards';
import { Main, Search, Left, Right, BottomLeft } from './HomePage.styles';
import data from './data';
import MapWithMarkers from '../../components/Maps/MapWithMarkers';
import Filter from '../../components/Filter/filter';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import CallToActionDialog from '../../components/CallToActionDialog/CallToActionDialog';

const itemsPerPage = 6;

class HomePage extends Component {
  state = {
    cards: data.cards,
    filteredCards: data.cards,
    dataToShow: [],
    toggleCTADialog: false,
    selectedRest: {}
  };

  componentWillMount() {
    const dataToShow = data.cards.slice(0, itemsPerPage - 1);
    this.setState({ dataToShow });
  }

  onMarkerClick = id => {
    this.onCardClick(id);
    this.scroll(id);
  };

  onCardClick = (id, borderType = '#EAE8F2') => {
    const { filteredCards } = this.state;
    const selectedCard = filteredCards.map(card =>
      (card.id === id
        ? { ...card, selected: borderType, showInfo: !card.showInfo }
        : { ...card, showInfo: false, selected: null }));
    this.setState({ filteredCards: selectedCard });
  };

  getRandomCard() {
    return this.state.cards[Math.floor(Math.random() * this.state.cards.length)];
  }
  updateShownCards = dataToShow => {
    this.setState({ dataToShow });
  };

  redirectToLocation = (history, id) => {
    history.push(`/location/${id}`);
  };

  scroll = cardId => {
    const myElement = document.getElementById(cardId);
    const topPos = myElement.parentElement.parentElement.offsetTop;
    document.getElementById('cardWrapper').scrollTop = topPos;
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
    const { filteredCards, cards, dataToShow } = this.state;

    return (
      <div>
        <Main>
          <Search gridArea="search">
            <Filter cards={cards} updateFilterCards={this.updateFilterCards} />
          </Search>
          <Right gridArea="right">
            <GridCards
              itemsPerPage={itemsPerPage}
              updateShownCards={this.updateShownCards}
              filteredCards={filteredCards}
              toggleCTADialog={this.toggleCTADialog}
              redirectToLocation={this.redirectToLocation}
              onCardClick={this.onCardClick}
            />
            <CallToActionDialog
              selectedRest={this.state.selectedRest}
              open={this.state.toggleCTADialog}
              toggleCTADialog={this.toggleCTADialog}
            />
          </Right>
          <Left gridArea="left">
            <MapWithMarkers
              dataToShow={dataToShow}
              onMarkerClick={this.onMarkerClick}
              dataMarkers={filteredCards}
              lat={34}
              lng={32}
            />
          </Left>
          <BottomLeft gridArea="bottomLeft">
            <FeaturedCard
              special={this.getRandomCard()}
              cards={cards}
              toggleCTADialog={this.toggleCTADialog}
              onCardClick={this.onCardClick}
            />
          </BottomLeft>
        </Main>
      </div>
    );
  }
}

export default HomePage;
