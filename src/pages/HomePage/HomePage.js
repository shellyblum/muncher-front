import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Main, Search, Left, Right, BottomLeft } from './HomePage.styles';
import MapWithMarkers from '../../components/Maps/MapWithMarkers';
import Filter from '../../components/Filter/filter';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import GridCards from '../../containers/GridCards';
import { getAllLocations } from '../../redux/actions/location';

class HomePage extends Component {
  // disable strict prop types until we will know back response
  /* eslint-disable react/forbid-prop-types */
  static propTypes = {
    filteredCards: PropTypes.array.isRequired,
    locations: PropTypes.array.isRequired
  };
  /* eslint-enable */

  componentDidMount() {
    // this.props.getLocations();
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
    return this.props.locations[Math.floor(Math.random() * this.props.locations.length)];
  }

  scroll = cardId => {
    const myElement = document.getElementById(cardId);
    const topPos = myElement.parentElement.parentElement.offsetTop;
    document.getElementById('cardWrapper').scrollTop = topPos;
  };

  // do we need the date here?
  applyStyle = id => {
    if (this.state.isSelected === id);
  };

  // should be moved to redux action as the state of filters will moved be there
  updateFilterCards = filteredCards => {
    this.setState({ filteredCards });
  };

  render() {
    const { locations, filteredCards } = this.props;

    return (
      <div>
        <Main>
          <Search gridArea="search">
            <Filter cards={locations} updateFilterCards={this.updateFilterCards} />
          </Search>
          <Right gridArea="right">
            <GridCards />
          </Right>
          <Left gridArea="left">
            <MapWithMarkers onMarkerClick={this.onMarkerClick} dataMarkers={filteredCards} lat={34} lng={32} />
          </Left>
          <BottomLeft gridArea="bottomLeft">
            <FeaturedCard special={this.getRandomCard()} cards={locations} toggleCTADialog={this.toggleCTADialog} onCardClick={this.onCardClick} />
          </BottomLeft>
        </Main>
      </div>
    );
  }
}

const mapStateToProps = ({ location }) => {
  const { locations, filteredCards } = location;
  return {
    locations,
    filteredCards
  };
};

const mapDispatchToProps = dispatch => ({
  getLocations: () => dispatch(getAllLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

