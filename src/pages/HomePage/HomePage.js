import React, { Component } from 'react';
import styled from 'styled-components';
import GridListCards from '../../components/GridListCards/GridListCards';

const Main = styled.div`
  background-color: #fbfbfb;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'search search search' 'left right right'
    'bottomLeft right right' '. right right';
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

const data = {
  gridColumns: 3,
  gridArea: 'right',
  cards: [
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title1',
      text:
        'Muncher - Text1: It is a long established fact that a reader will be distracted.',
      action: 'Call now'
    },
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title2',
      text:
        'Muncher - Text2: It is a long established fact that a reader will be distracted.',
      action: 'Book a seat'
    },
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title3',
      text:
        'Muncher - Text3: It is a long established fact that a reader will be distracted.',
      action: 'Book a seat'
    },
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title4',
      text:
        'Muncher - Text4: It is a long established fact that a reader will be distracted.',
      action: 'Book a seat'
    },
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title5',
      text:
        'Muncher - Text5: It is a long established fact that a reader will be distracted.',
      action: 'Call now'
    },
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title6',
      text:
        'Muncher - Text6: It is a long established fact that a reader will be distracted.',
      action: 'Book a seat'
    }
  ]
};

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
          <GridListCards {...data} />
          <BottomLeft gridArea="bottomLeft" />
        </Main>
      </div>
    );
  }
}

export default HomePage;
