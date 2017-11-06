import React from 'react';
import MenuItem from 'material-ui/MenuItem';

function initDistances(farestDist) {
  const distItems = [];
  const section = farestDist / 5;
  let val;
  let i = 0;
  while (i < 5) {
    val = parseInt(section * i, 10);
    distItems.push(<MenuItem key={i} value={val} primaryText={val} />);
    i += 1;
  }
  return distItems;
}

export default initDistances;
