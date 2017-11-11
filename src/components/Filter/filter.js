import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import geolib from 'geolib';
import FlatButton from 'material-ui/FlatButton';
import { FilterStyle, SelectItem, ButtonItem, DistanceItem,ButtonItemFilter } from './filter.styled';
import filterHelper from './filterHelper';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderType: '',
      city: '',
      distance: 100000000000,
      menuDistances: [],
      myPosition: {
        latitude: -1,
        longitude: -1
      }
    };

    this.getMyLocation();
    this.updateOrderType = this.updateOrderType.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.updateDist = this.updateDist.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.filterAll = this.filterAll.bind(this);
  }

  getMyLocation() {
    navigator.geolocation.getCurrentPosition(
      myPosition1 => {
        const { latitude, longitude } = myPosition1.coords;
        const myPosition = { latitude, longitude };
        this.setState({ myPosition });
        this.checkFarthestPoint(myPosition);
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  initCities() {
    return this.props.cards.map(card => (
      <MenuItem key={card.city} value={card.city} primaryText={card.city} />
    ));
  }
  updateCity(event, index, value) {
    this.setState({ city: value });
  }

  updateDist(event, index, distance) {
    this.setState({ distance });
  }

  updateOrderType(event, index, orderType) {
    this.setState({ orderType });
  }

  checkFarthestPoint(myPosition) {
    const km = 1000;
    let dist;
    let distance =
      this.props.filteredCards.reduce((maxDist, card) => {
        dist = geolib.getDistance(myPosition, { latitude: card.lng, longitude: card.lat });
        return Math.max(dist, maxDist);
      }, 0) / km;
    distance += 1;
    const menuDistances = filterHelper.initDistances(distance);
    this.setState({ distance, menuDistances });
  }

  filterAll() {
    const { city, myPosition, distance, orderType } = this.state;
    const fl = this.props.cards.filter(card =>
      this.checkCity(card, city) &&
        this.checkDistance(card, myPosition, distance) &&
        this.checkOrderType(card, orderType));
    this.props.updateFilterCards(fl);
  }

  checkCity(card, city) {
    return card.city.toLowerCase().includes(city.toLowerCase());
  }

  checkDistance(card, myPosition, distance) {
    let dist = geolib.getDistance(myPosition, { latitude: card.lng, longitude: card.lat });
    dist /= 1000;
    return dist < distance;
  }
  checkOrderType(card, orderType) {
    return filterHelper.findTypeInArray(card, orderType);
  }
  clearFilter() {
    const { max } = this.state;
    this.setState({ orderType: '', city: '', distance: max });
    this.props.updateFilterCards(this.props.cards);
  }

  render() {
    const { orderType, city, distance, menuDistances } = this.state;
    return (
      <FilterStyle>
        <SelectField
          style={SelectItem}
          floatingLabelText="Order-Type"
          value={orderType}
          onChange={this.updateOrderType}
        >
          <MenuItem value="takeOut" primaryText="take out" />
          <MenuItem value="sit" primaryText="sit" />
        </SelectField>

        <SelectField
          style={SelectItem}
          floatingLabelText="location"
          value={city}
          onChange={this.updateCity}
        >
          {this.initCities()}
        </SelectField>

        <SelectField
          style={SelectItem}
          labelStyle={{ color: 'green' }}
          floatingLabelText="distance"
          value={distance}
          onChange={this.updateDist}
        >
          {menuDistances}
        </SelectField>

        <DistanceItem>{distance || 0} km</DistanceItem>

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
