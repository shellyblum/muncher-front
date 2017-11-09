import React from 'react';
import MenuItem from 'material-ui/MenuItem';

function initDistances(farthestDistance) {
  const MENU_ITEMS = 9;
  const START_FROM = 1;
  return Array(MENU_ITEMS)
    .fill(1)
    .map((item, index) =>  (
      <MenuItem
        key={parseInt((farthestDistance / MENU_ITEMS) * (index + START_FROM), 10)}
        value={parseInt((farthestDistance / MENU_ITEMS) * (index + START_FROM), 10)}
        primaryText={parseInt((farthestDistance / MENU_ITEMS) * (index + START_FROM), 10)}
      />));
}

function findTypeInArray(card, cardType) {
  return card.orderType.find(type => type === cardType);
}

export default { initDistances, findTypeInArray };
