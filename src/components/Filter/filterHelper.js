import React from 'react';
import geolib from 'geolib';
import MenuItem from 'material-ui/MenuItem';

function initDistances(farthestDistance) {
  const MENU_ITEMS = 9;
  const START_FROM = 1;
  return Array(MENU_ITEMS)
    .fill(1)
    .map((item, index) => (
      <MenuItem
        key={parseInt(farthestDistance / MENU_ITEMS * (index + START_FROM), 10)}
        value={parseInt(farthestDistance / MENU_ITEMS * (index + START_FROM), 10)}
        primaryText={parseInt(farthestDistance / MENU_ITEMS * (index + START_FROM), 10)}
      />
    ));
}

function findTypeInArray(card, cardType) {
  return card.orderType.find(type => type === cardType);
}

function checkCity(card, city) {
  return card.city.toLowerCase().includes(city.toLowerCase());
}

function checkDistance(card, myPosition, distance) {
  let dist = geolib.getDistance(myPosition, { latitude: card.lng, longitude: card.lat });
  dist /= 1000;
  return dist < distance;
}
function checkOrderType(card, orderType) {
  return findTypeInArray(card, orderType);
}

export default { initDistances, findTypeInArray, checkOrderType, checkCity, checkDistance };
