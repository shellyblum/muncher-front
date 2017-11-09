import React from 'react';
import MenuItem from 'material-ui/MenuItem';

function initDistances(farthestDistance) {
  const distItems = [];
  const section = farthestDistance / 5;
  let value;
  let index = 0;
  const tempArr = Array(5).fill(1);
  tempArr.forEach(() => {
    value = parseInt(section * index, 10);
    distItems.push(<MenuItem key={index} value={value} primaryText={value} />);
    index += 1;
  });
  return distItems;
}

function findTypeInArray(card, cardType) {
  return card.orderType.find(type => type === cardType);
}

export default { initDistances, findTypeInArray };
