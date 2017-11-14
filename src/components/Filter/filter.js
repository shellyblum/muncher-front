import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import geolib from 'geolib';
import FlatButton from 'material-ui/FlatButton';
import {
  FilterStyle,
  SelectItem,
  ButtonItem,
  DistanceItem,
  ButtonItemFilter
} from './filter.styled';
import filterHelper from './filterHelper';

let INITIAL_DIST = -1;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: '',
      city: '',
      distance: INITIAL_DIST,
      menuDistances: [],
      myPosition: {
        latitude: -1,
        longitude: -1
      }
    };

    this.clearFilter = this.clearFilter.bind(this);
    this.filterAll = this.filterAll.bind(this);
  }

  componentDidMount() {
    this.getMyLocation();
  }
  getMyLocation() {
    navigator.geolocation.getCurrentPosition(
      myPosition1 => {
        const { latitude, longitude } = myPosition1.coords;
        const myPosition = { latitude, longitude };
        this.checkFarthestPoint(myPosition);
        this.setState({ myPosition });
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 1000 }
    );
  }

  initCities() {
    return this.props.cards.map(card => (
      <MenuItem key={card.city} value={card.city} primaryText={card.city} />
    ));
  }

  checkFarthestPoint(myPosition) {
    const KM = 1000;
    let dist;
    let distance =
      this.props.filteredCards.reduce((maxDist, card) => {
        dist = geolib.getDistance(myPosition, { latitude: card.lng, longitude: card.lat });
        return Math.max(dist, maxDist);
      }, 0) / KM;
    distance += 1;
    distance = parseInt(distance, 10);
    const menuDistances = filterHelper.initDistances(distance);
    INITIAL_DIST = distance;
    this.setState({ distance, menuDistances });
  }

  filterAll() {
    const { city, myPosition, distance, orderType } = this.state;
    const { cards } = this.props;
    const filteredList = cards.filter(card => {
      const cityFlag = city ? card.city.toLowerCase().includes(city.toLowerCase()) : 1;
      const orderTypeFlag = orderType ? card.orderType.find(type => type === orderType) : 1;
      return filterHelper.checkDistance(card, myPosition, distance) && cityFlag && orderTypeFlag;
    });

    this.props.updateFilterCards(filteredList);
  }

  clearFilter() {
    const { cards } = this.props;
    this.setState({ orderType: '', city: '', distance: INITIAL_DIST });
    this.props.updateFilterCards(cards);
  }

  render() {
    const { orderType, city, distance, menuDistances } = this.state;
    return (
      <FilterStyle>
        <SelectField
          style={SelectItem}
          floatingLabelText="Order-Type"
          value={orderType}
          onChange={(e, index, value) => {
            this.setState({ orderType: value });
          }}
        >
          <MenuItem value="takeOut" primaryText="take out" />
          <MenuItem value="sit" primaryText="sit" />
        </SelectField>

        <SelectField
          style={SelectItem}
          floatingLabelText="location"
          value={city}
          onChange={(e, index, value) => {
            this.setState({ city: value });
          }}
        >
          {this.initCities()}
        </SelectField>

        <SelectField
          style={SelectItem}
          labelStyle={{ color: 'green' }}
          floatingLabelText="distance"
          value={distance}
          onChange={(e, index, value) => {
            this.setState({ distance: value });
          }}
        >
          {menuDistances}
        </SelectField>

        <DistanceItem>{distance || 0} KM</DistanceItem>

        <FlatButton style={ButtonItem} label="Clear" primary onClick={this.clearFilter} />
        <FlatButton style={ButtonItemFilter} label="filter" primary onClick={this.filterAll} />
      </FilterStyle>
    );
  }
}

Filter.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.string,
    city: PropTypes.string,
    orderType: PropTypes.arrayOf(PropTypes.string),
    lng: PropTypes.number,
    lat: PropTypes.number
  })).isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.string,
    city: PropTypes.string,
    orderType: PropTypes.arrayOf(PropTypes.string),
    lng: PropTypes.number,
    lat: PropTypes.number
  })).isRequired,
  updateFilterCards: PropTypes.func.isRequired
};

export default Filter;
