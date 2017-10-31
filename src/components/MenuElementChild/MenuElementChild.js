import React from 'react';
import PropTypes from 'prop-types';
import { ItemName, ItemPrice, ItemDescription } from '../MenuElementChild/MenuElementChild.styled';

const MenuElementChild = ({ id, name, price, currency, description }) => (
  <div key={id}>
    <ItemName> {name} </ItemName>
    <ItemPrice> {price} {currency} </ItemPrice>
    <ItemDescription>{description}</ItemDescription>
  </div>
);

MenuElementChild.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  price: PropTypes.string,
  currency: PropTypes.string,
  description: PropTypes.string
};

MenuElementChild.defaultProps = {
  name: 'name',
  price: 'price',
  currency: 'currency',
  description: 'description'
};

export default MenuElementChild;
