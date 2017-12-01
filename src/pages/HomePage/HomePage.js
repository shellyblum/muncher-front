import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridCards from '../../components/GridCards/GridCards';
import { Main, Search, Left, Right, BottomLeft } from './HomePage.styles';
import MapWithMarkers from '../../components/Maps/MapWithMarkers';
import Filter from '../../components/Filter/filter';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import CallToActionDialog from '../../components/CallToActionDialog/CallToActionDialog';

import { Api } from '../../assets/api/muncher.api';

const placeHolder = {
  id: '1',
  name: 'Muncher - Title1',
  type: ['takeOut'],
  generalDesc: 'Muncher - Text1: It is a long established fact that a reader will be distracted.',
  imageUrl:
    'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
  address: {
    country: 'United States',
    city: 'Chicago',
    street: 'South State Street',
    number: '22/11',
    lat: 34.4324323,
    lng: 34.443432
  }
};

// const placeHolder = {
//   id: '0',
//   image: '',
//   title: 'Muncher - Title1',
//   text: '',
//   action: 'Call now',
//   city: 'DSW Designer Shoe Warehouse, South State Street, Chicago, IL, United States',
//   orderType: ['takeOut'],
//   lng: 34.443432,
//   lat: 34.4324323
// };

const SDK = new Api();

class HomePage extends Component {
  state = {
    cards: [placeHolder],
    filteredCards: [placeHolder],
    toggleCTADialog: false,
    selectedRest: {}
  };

  componentDidMount = async () => {
    const response = await SDK.locationGetAll();
    this.setState({ cards: response.data, filteredCards: response.data });
  };

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
    const { filteredCards, cards } = this.state;

    return (
      <div>
        <Main>
          <Search gridArea="search">
            <Filter cards={cards} updateFilterCards={this.updateFilterCards} />
          </Search>
          <Right gridArea="right">
            <GridCards
              filteredCards={filteredCards}
              toggleCTADialog={this.toggleCTADialog}
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

const mapStateToProps = ({ user }) => {
  const { loginDialogOpen } = user;
  return {
    loginDialogOpen
  };
};

const mapDispatchToProps = dispatch => ({
  toggleDialog: () => {
    dispatch();
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

// export default HomePage;
