import React, { Component } from 'react';
import styled from 'styled-components';
import GridListCards from '../../components/GridListCards/GridListCards';

const Main = styled.div`
  background-color: #fbfbfb;
  padding: 1em;
  display: grid;
  grid-template-areas: 'search search search' 'left header header'
    'left right right' 'bottomLeft right right';
`;

const Search = styled.div`
  border: 1px solid black;
  height: 50px;
  margin-bottom: 5px;
  grid-area: ${({ gridArea }) => gridArea};
`;

const Left = styled.div`
  border: 1px solid red;
  height: 450px;
  margin-bottom: 5px;
  margin-right: 5px;
  grid-area: ${({ gridArea }) => gridArea};
`;

const BottomLeft = styled.div`
  border: 1px solid green;
  margin-right: 5px;
  grid-area: ${({ gridArea }) => gridArea};
  height: 250px;
`;

const Header = styled.h2`
  background-color: #fff;
  padding: 10px 0 5px 10px;
  border: 1px solid #ddd;
  width: 100%;
  grid-area: header;
`;
const tilesData = [
  {
    img: 'http://lorempicsum.com/futurama/250/250/2',
    location: 'Breakfast',
    address: 'jill111'
  },
  {
    img: 'http://lorempicsum.com/futurama/250/250/1',
    location: 'Tasty burger',
    address: 'pashminu'
  },
  {
    img: 'http://lorempicsum.com/futurama/250/250/3',
    location: 'Camera',
    address: 'Danson67'
  },
  {
    img: 'http://lorempicsum.com/futurama/250/250/4',
    location: 'Morning',
    address: 'fancycrave1'
  },
  {
    img: 'http://lorempicsum.com/futurama/250/250/5',
    location: 'Hats',
    address: 'Hans'
  },
  {
    img: 'http://lorempicsum.com/futurama/250/250/6',
    location: 'Honey',
    address: 'fancycravel'
  },
  {
    img: 'http://lorempicsum.com/futurama/250/250/7',
    location: 'Vegetables',
    address: 'jill111'
  },
  {
    img: 'http://lorempicsum.com/futurama/250/250/8',
    location: 'Water plant',
    address: 'BkrmadtyaKarki'
  },
  {
    img: 'http://lorempicsum.com/futurama/250/250/9',
    location: 'Water Some',
    address: 'BkrmadtyaKarki'
  },
  {
    img: 'http://lorempicsum.com/futurama/250/250/1',
    location: 'plant Fast',
    address: 'BkrmadtyaKarki'
  }
];

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Main>
          <Search gridArea="search" />
          <Left gridArea="left" />
          <Header>Hello List </Header>
          <GridListCards gridArea="right" items={tilesData} />
          <BottomLeft gridArea="bottomLeft" />
        </Main>
      </div>
    );
  }
}

export default HomePage;
