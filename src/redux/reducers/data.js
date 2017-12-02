/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';
import times from 'lodash/times';

const template = () => ({
  id: faker.random.uuid(),
  name: faker.lorem.word(),
  type: [faker.random.word()],
  generalDesc: faker.lorem.sentence(),
  imageUrl: 'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/spain/canary-islands/tenerife/h10-timanfaya-palace-lanzarote-restaurant-small.jpg',
  address: {
    country: 'United States',
    city: 'Chicago',
    street: 'South State Street',
    number: '22/11',
    lat: +faker.address.latitude(),
    lng: +faker.address.longitude()
  }
});


export const cards = [];
times(20, () => cards.push(template()));

export const data = {
  gridColumns: 3,
  gridArea: 'right'
};
