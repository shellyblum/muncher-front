import 'antd/lib/select/style/css';
import 'antd/lib/button/style/css';
import { Button, Select } from 'antd';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import geolib from 'geolib';
import { FilterStyle, ButtonItem, DistanceItem } from './filter.styled';

const { Option } = Select;
let INITIAL_DIST = -1;
const KM = 1000;

class Filter extends Component {
  static initDistances(farthestDistance) {
    const MENU_ITEMS = 9;
    const START_FROM = 1;
    const section = farthestDistance / MENU_ITEMS;
    return Array(MENU_ITEMS)
      .fill(1)
      .map((item, index) => {
        const value = parseInt(section * (index + START_FROM), 10);
        return (
          <Option key={value} value={value}>
            {value}
          </Option>
        );
      });
  }

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
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 1000 }
    );
  }

  initCities() {
    return this.props.cards.map(card => <Option value={card.city}>{card.city}</Option>);
  }

  checkFarthestPoint(myPosition) {
    let dist;
    let distance =
      this.props.filteredCards.reduce((maxDist, card) => {
        dist = geolib.getDistance(myPosition, { latitude: card.lng, longitude: card.lat });
        return Math.max(dist, maxDist);
      }, 0) / KM;
    distance += 1;
    distance = parseInt(distance, 10);
    INITIAL_DIST = distance;
    this.setState({ distance, menuDistances: Filter.initDistances(distance) });
  }

  filterAll() {
    const { city, myPosition, distance, orderType } = this.state;
    const { cards } = this.props;
    const filteredList = cards.filter(card => {
      const cityFlag = city ? card.city.toLowerCase().includes(city.toLowerCase()) : 1;
      const orderTypeFlag = orderType ? card.orderType.find(type => type === orderType) : 1;
      const geoDistance = geolib.getDistance(myPosition, {
        latitude: card.lng,
        longitude: card.lat
      });
      return geoDistance / KM < distance && cityFlag && orderTypeFlag;
    });

    this.props.updateFilterCards(filteredList);
  }

  clearFilter() {
    const { cards } = this.props;
    this.setState({ orderType: '', city: '', distance: INITIAL_DIST });
    this.props.updateFilterCards(cards);
  }

  render() {
    const { distance, menuDistances } = this.state;
    return (
      <FilterStyle>
        <Select
          showSearch
          size="large"
          style={{ width: 200 }}
          placeholder="Select order type"
          optionFilterProp="children"
          onChange={value => {
            this.setState({ orderType: value });
          }}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="takeOut">takeOut</Option>
          <Option value="sit">sit</Option>
        </Select>

        <Select
          showSearch
          size="large"
          style={{ width: 200 }}
          placeholder="Select city"
          optionFilterProp="children"
          onChange={value => {
            this.setState({ city: value });
          }}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {this.initCities()}
        </Select>

        <Select
          showSearch
          size="large"
          style={{ width: 200 }}
          placeholder="Select distance"
          optionFilterProp="children"
          onChange={value => {
            this.setState({ distance: value });
          }}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {menuDistances}
        </Select>
        <DistanceItem>{distance || 0} KM</DistanceItem>

        <Button type="primary" size="large" style={ButtonItem} onClick={this.clearFilter}>
          Clear
        </Button>
        <Button type="primary" size="large" style={ButtonItem} onClick={this.filterAll}>
          Filter
        </Button>
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
