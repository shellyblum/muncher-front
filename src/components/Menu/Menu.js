import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuElements from '../MenuElements/MenuElements';

const data = {
  drinks: [{ id: 1, name: 'vodka', price: '50', currency: '$', description: 'lorem ipsum' }, { id: 2, name: 'taqila', price: '90', currency: '$', description: 'lorem ipsum' }, { id: 3, name: 'water', price: '10', currency: '$', description: 'lorem ipsum' }],
  Breakfast: [{ id: 4, name: 'eggs', price: '89', currency: '$', description: 'lorem ipsum' }, { id: 5, name: 'bacon', price: '6', currency: '$', description: 'lorem ipsum' }],
  mains: [{ id: 6, name: 'hamburger', price: '89', currency: '$', description: 'lorem ipsum' }, { id: 7, name: 'salmon', price: '25', currency: '$', description: 'lorem ipsum' }],
  snacks: [{ id: 8, name: 'white chocolate', price: '240', currency: '$', description: 'lorem ipsum' }, { id: 9, name: 'coconut', price: '49', currency: '$', description: 'lorem ipsum' }, { id: 10, name: 'hash cake', price: '499', currency: '$', description: 'lorem ipsum' }]
};

const Body = styled.div`
  width: ${({ width }) => width || '100px'};
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'drinks'
    };
  }
  render() {
    const { grid } = this.props;
    return (
      <Body width={grid}>
        <Tabs
          value={this.state.value}
          onChange={value => {
            this.setState({
              value
            });
          }}
        >
          {Object.keys(data).map(key => (
            <Tab key={key} label={key} value={key}>
              <div>
                <MenuElements items={data[key]}>{key}</MenuElements>
              </div>
            </Tab>
          ))}
        </Tabs>
      </Body>
    );
  }
}

Menu.propTypes = {
  grid: PropTypes.string
};

Menu.defaultProps = {
  grid: '100px'
};

export default Menu;
