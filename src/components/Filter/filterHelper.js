import 'antd/lib/select/style/css';
import { Select } from 'antd';
import React from 'react';
import geolib from 'geolib';

const { Option } = Select;

function initDistances(farthestDistance) {
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

function checkDistance(card, myPosition, distance) {
  let dist = geolib.getDistance(myPosition, { latitude: card.lng, longitude: card.lat });
  dist /= 1000;
  return dist < distance;
}

export default { initDistances, checkDistance };
