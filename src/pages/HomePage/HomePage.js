import React, { Component } from 'react';
import GridListCards from '../../components/GridListCards/GridListCards';
import { Main, Search, Left, BottomLeft } from './HomePage.styles';
import data from './data';
import MapWithMarkers from '../../components/Maps/MapWithMarkers';

class HomePage extends Component {
  constructor() {
    super();
    this.state = { height: 0, isSelected: 1 };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.toggleYourSelf=this.toggleYourSelf.bind(this);
  }

  // componentWillMount() {
  //   this.setState({ data });
  // }

  onMarkerClick(cardId) {
    this.setState({ cardId });
  }

  updateHeight(height) {
    this.setState({ height });
  }

  selectCard(isSelected) {
    this.setState({ isSelected });
  }
  applyStyle(id) {
    if (this.state.isSelected === id);
  }

  render() {
    const { cardId } = this.state;
    console.log(data);
    return (
      <div>
        <Main>
          <Search gridArea="search">Search will be here</Search>
          <Left gridArea="left">
            <MapWithMarkers
              onMarkerClick={this.onMarkerClick}
              dataMarkers={data.cards}
              height={150}
              lat={34}
              lng={32}
            />
          </Left>
          <GridListCards
            toggleYourSelf={this.toggleYourSelf}
            height={this.state.height}
            cardId={cardId}
            {...data}
          />
          <BottomLeft gridArea="bottomLeft">Title component here</BottomLeft>
        </Main>
      </div>
    );
  }
}

export default HomePage;
