import React, { Component } from 'react';
import GridListCards from '../../components/GridListCards/GridListCards';
import { Main, Search, Left } from './HomePage.styles';
import data from './data';
import BottomLeft from '../../components/FeaturedCard/FeaturedCard';
import ImageShow from '../../components/ImageShow/ImageShow';

const images = [
  {
    image: 'http://lorempicsum.com/rio/627/300/1',
    alt: 'http://lorempicsum.com/futurama/350/200/1',
    discription: 'ahahahahahhahahahahahahahahha'
  },
  {
    image: 'http://lorempicsum.com/rio/627/300/2',
    alt: 'http://lorempicsum.com/futurama/350/200/1',
    discription: 'boz boz boz boz boz boz boz boz boz '
  },
  {
    image: 'http://lorempicsum.com/rio/627/300/3',
    alt: 'http://lorempicsum.com/futurama/350/200/1',
    discription: 'lalalalallalllllalala'
  },
  {
    image: 'http://lorempicsum.com/rio/627/300/4',
    alt: 'http://lorempicsum.com/futurama/350/200/1',
    discription: 'hahahahahahhahahaha'
  }];

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Main>
          <Search gridArea="search">Search will be here</Search>
          <Left gridArea="left">
            <ImageShow data={images} />
          </Left>
          <GridListCards {...data} />
          <BottomLeft gridArea="bottomLeft">Title component here</BottomLeft>
        </Main>
      </div>
    );
  }
}

export default HomePage;
