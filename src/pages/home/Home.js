import React from 'react';
import CardList from '../../components/common/CardList/CardList';

const parameters = {
  listTitle: 'Restaurants',
  width: '80%',
  gridColumns: '4',
  gridGap: '2rem',
  cards: [
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title1',
      subtitle: 'Muncher - Subtitle1',
      text:
        'Muncher - Text1: It is a long established fact that a reader will be distracted.',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
      action: 'Muncher - action'
    },
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title2',
      subtitle: 'Muncher - Subtitle2',
      text:
        'Muncher - Text2: It is a long established fact that a reader will be distracted.',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
      action: 'Muncher - action'
    },
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title3',
      subtitle: 'Muncher - Subtitle3',
      text:
        'Muncher - Text3: It is a long established fact that a reader will be distracted.',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
      action: 'Muncher - action'
    },
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title4',
      subtitle: 'Muncher - Subtitle4',
      text:
        'Muncher - Text4: It is a long established fact that a reader will be distracted.',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
      action: 'Muncher - action'
    },
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title5',
      subtitle: 'Muncher - Subtitle5',
      text:
        'Muncher - Text5: It is a long established fact that a reader will be distracted.',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
      action: 'Muncher - action'
    },
    {
      image:
        'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
      title: 'Muncher - Title6',
      subtitle: 'Muncher - Subtitle6',
      text:
        'Muncher - Text6: It is a long established fact that a reader will be distracted.',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
      action: 'Muncher - action'
    }
  ]
};

const Home = () => (
  <div>
    <CardList {...parameters} />
  </div>
);

export default Home;
