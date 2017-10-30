import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ItemPrice = styled.div`
  float: right;
  font-weight: bold;
  font-family: arial;
  margin-top: -22px;
`;

const ItemDescription = styled.div`
  font-style: italic;
  font-size: 0.9em;
  line-height: 1.5em;
`;

const ItemName = styled.div`
  font-family: helvetica;
  font-weight: bold;
  border-bottom: 2px dotted rgb(213, 213, 213);
  margin-top: 1em;
`;

const MenuElementChild = ({ id, name, price, description }) => (
  <div key={id}>
    <ItemName> {name} </ItemName>
    <ItemPrice> {price}</ItemPrice>
    <ItemDescription>{description}</ItemDescription>
  </div>
);


MenuElementChild.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string
};

MenuElementChild.defaultProps = {
  name: 'name',
  price: 'price',
  description: 'description'
};

export default MenuElementChild;
