import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import geolib from 'geolib';
import FlatButton from 'material-ui/FlatButton';
import { FilterStyle, SelectItem, ButtonItem, DistanceItem } from './filter.styled';
import filterHelper from './filterHelper';

class Filter extends Component {
  constructor(props) {
    super(props);
    const farthestDistance = this.checkFarthestPoint();
    const menuDistances = filterHelper.initDistances(farthestDistance);
    this.state = {
      orderType: '',
      title: '',
      city: '',
      distance: farthestDistance,
      menuDistances
    };

    this.filterOrderType = this.filterOrderType.bind(this);
    this.filterTitle = this.filterTitle.bind(this);
    this.filterCity = this.filterCity.bind(this);
    this.filterDist = this.filterDist.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  getTitleMenuItems() {
    return this.props.cards.map(item => (
      <MenuItem key={item.title} value={item.title} primaryText={item.title} />
    ));
  }

  checkFarthestPoint() {
    const KM = 1000;
    const currLocation = { latitude: 34.518611, longitude: 34.408056 };
    let dist;
    return (
      this.props.filteredCards.reduce((maxDist, card) => {
        dist = geolib.getDistance(currLocation, { latitude: card.lng, longitude: card.lat });
        return Math.max(dist, maxDist);
      }, 0) / KM
    );
  }

  clearFilter() {
    const { max } = this.state;
    this.setState({ orderType: '', title: '', city: '', distance: max });
    this.props.updateFilterCards(this.props.cards);
  }

  filterOrderType(event, index, orderType) {
    this.setState({ orderType });
    const fl = this.props.cards.filter(card => filterHelper.findTypeInArray(card, orderType));
    this.props.updateFilterCards(fl);
  }

  filterTitle(event, index, title) {
    this.setState({ title });
    const fl = this.props.cards.filter(card => card.title === title);
    this.props.updateFilterCards(fl);
  }

  initCities() {
    return this.props.cards.map(card => (
      <MenuItem key={card.city} value={card.city} primaryText={card.city} />
    ));
  }

  filterCity(event, index, city) {
    this.setState({ city });
    const fl = this.props.cards.filter(card =>
      card.city.toLowerCase().includes(city.toLowerCase()));
    this.props.updateFilterCards(fl);
  }

  filterDist(event, index, distance) {
    this.setState({ distance });
    // Working with W3C Geolocation API
    let dist;
    const currLocation = { latitude: 34.518611, longitude: 34.408056 };
    const fl = this.props.cards.filter(card => {
      dist = geolib.getDistance(currLocation, { latitude: card.lng, longitude: card.lat });
      dist /= 1000;
      return dist < distance;
    });
    this.props.updateFilterCards(fl);
  }

  render() {
    const { orderType, title, city, distance, menuDistances } = this.state;

    return (
      <FilterStyle>
        <SelectField
          style={SelectItem}
          floatingLabelText="Order-Type"
          value={orderType}
          onChange={this.filterOrderType}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem value="takeOut" primaryText="take out" />
          <MenuItem value="sit" primaryText="sit" />
        </SelectField>

        <SelectField
          style={SelectItem}
          floatingLabelText="title"
          value={title}
          onChange={this.filterTitle}
        >
          <MenuItem value={null} primaryText="" />
          {this.getTitleMenuItems()}
        </SelectField>

        <SelectField
          style={SelectItem}
          floatingLabelText="location"
          value={city}
          onChange={this.filterCity}
        >
          <MenuItem value={null} primaryText="" />
          {this.initCities()}
        </SelectField>

        <SelectField
          style={SelectItem}
          floatingLabelText="distance"
          value={distance}
          onChange={this.filterDist}
        >
          {menuDistances}
        </SelectField>

        <DistanceItem>{distance || 0} KM</DistanceItem>

        <FlatButton style={ButtonItem} label="Clear" primary onClick={this.clearFilter} />
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
