import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuElements from '../MenuElements/MenuElements'

const drinks = [{price:'50$',description:'lorem ipsum'},{name:'taqila',price:'90$',description:'lorem ipsum'},{name:'water',price:'10$',description:'lorem ipsum'}];
const Breakfast = [{name:'eggs',price:'89$',description:'lorem ipsum'},{name:'bacon',price:'6$',description:'lorem ipsum'}]
const mains = [{name:'hamburger',price:'89$',description:'lorem ipsum'},{name:'salmon',price:'25$',description:'lorem ipsum'}]
const snacks = [{name:'white chocolate',price:'240$',description:'lorem ipsum'},{name:'coconut',price:'49$',description:'lorem ipsum'},{name:'hash cake',price:'499$',description:'lorem ipsum'}]


const Body = styled.div`
  width: ${({ w }) => w || '100px'};
`;


export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a'
    };
  }

  render() {
    const { grid } = this.props;
    return (
      <Body w={grid}>
        <Tabs
          value={this.state.value}
          onChange={value => {
            this.setState({
              value
            });
          }}
        >
          <Tab label="Drinks" value="a">
            <div>
                <MenuElements items = {drinks}> </MenuElements>
            </div>
          </Tab>
          <Tab label="Breakfast" value="b">
            <div>                    
              <MenuElements items = {Breakfast}> </MenuElements>
            </div>
          </Tab>
          <Tab label="Mains" value="c">
            <div>
              <MenuElements items = {mains}> </MenuElements>
            </div>
          </Tab>
          <Tab label="Snacks" value="d">
            <div>
              <MenuElements items = {snacks}> </MenuElements>
            </div>
          </Tab>
        </Tabs>
      </Body>
    );
  }
}

Menu.propTypes = {
  grid: PropTypes.string.isRequired
};
