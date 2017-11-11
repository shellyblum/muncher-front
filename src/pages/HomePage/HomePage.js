import React, { Component } from 'react';
import GridListCards from '../../components/GridListCards/GridListCards';
import { Main, Search, Left } from './HomePage.styles';
import data from './data';
import Filter from '../../components/Filter/filter';
import BottomLeft from '../../components/FeaturedCard/FeaturedCard';
import CallToActionDialog from '../../components/CallToActionDialog/CallToActionDialog';

class HomePage extends Component {
  constructor() {
    super();
    const filteredCards = data.cards;
    const { cards } = data;
    this.state = { cards, filteredCards, toggleCTADialog: false, selectedRest: undefined };
    this.updateFilterCards = this.updateFilterCards.bind(this);
    this.toggleCTADialog = this.toggleCTADialog.bind(this);
  }

  updateFilterCards(fl) {
    this.setState({ filteredCards: fl });
  }

  toggleCTADialog(restId) {
    const previousState = this.state.toggleCTADialog;
    this.setState({ toggleCTADialog: !previousState });
    this.findRestById(restId);
  }

  findRestById(restId) {
    const selectedRest = this.state.filteredCards.find(rest => rest.id === restId);
    this.setState({ selectedRest });
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
          <GridListCards
            filteredCards={filteredCards}
            {...data}
            toggleCTADialog={this.toggleCTADialog}
          />
          <CallToActionDialog
            selectedRest={this.state.selectedRest}
            open={this.state.toggleCTADialog}
            toggleCTADialog={this.toggleCTADialog}
          />
          <BottomLeft gridArea="bottomLeft">Title component here</BottomLeft>
        </Main>
      </div>
    );
  }
}

export default HomePage;
