import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import geolib from 'geolib';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import { FilterStyle, SelectItem, SliderItem, CityItem, ButtonItem } from './filter.styled';

class Filter extends Component {
  constructor(props) {
    super(props);
    const faresDist = this.checkFarestPoint() + 1;

    this.state = {
      orderType: '',
      title: '',
      city: '',
      distance: faresDist,
      max: faresDist,
      min: 0,
      step: faresDist / 1000
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
  checkFarestPoint() {
    const currLocation = { latitude: 34.518611, longitude: 34.408056 };
    let dist;
    return (
      this.props.filteredCards.reduce((maxDist, card) => {
        dist = geolib.getDistance(currLocation, { latitude: card.lng, longitude: card.lat });
        return Math.max(dist, maxDist);
      }, 0) / 1000
    );
  }

  clearFilter() {
    this.setState({ orderType: '', title: '', city: '', distance: 250 });
    this.props.updateFilterCards(this.props.cards);
  }

  filterOrderType(event, index, value) {
    this.setState({ orderType: value });
    const fl = this.props.cards.filter(card => card.orderType === value);
    this.props.updateFilterCards(fl);
  }
  filterTitle(event, index, value) {
    this.setState({ title: value });
    const fl = this.props.cards.filter(card => card.title === value);
    this.props.updateFilterCards(fl);
  }

  filterCity(value) {
    this.setState({ city: value });
    const fl = this.props.cards.filter(card =>
      card.city.toLowerCase().includes(value.toLowerCase()));
    this.props.updateFilterCards(fl);
  }

  filterDist(event, value) {
    this.setState({ distance: value });
    // Working with W3C Geolocation API
    let dist;
    const currLocation = { latitude: 34.518611, longitude: 34.408056 };
    const fl = this.props.cards.filter(card => {
      dist = geolib.getDistance(currLocation, { latitude: card.lng, longitude: card.lat });
      dist /= 1000;
      return dist < value;
    });
    this.props.updateFilterCards(fl);
  }

  render() {
    const { orderType, title, city, distance, max, min, step } = this.state;
    const inputProps = {
      value: city,
      onChange: this.filterCity
    };
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

        <PlacesAutocomplete style={CityItem} inputProps={inputProps} />

        <Slider
          style={SliderItem}
          min={min}
          max={max}
          step={step}
          value={distance}
          onChange={this.filterDist}
        />
        <div>
          <span>{distance}</span>
        </div>

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
    orderType: PropTypes.string,
    lng: PropTypes.number,
    lat: PropTypes.number
  })).isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.string,
    city: PropTypes.string,
    orderType: PropTypes.string,
    lng: PropTypes.number,
    lat: PropTypes.number
  })).isRequired,
  updateFilterCards: PropTypes.func.isRequired
};

export default Filter;
