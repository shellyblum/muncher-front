import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Body = styled.div`
  width: ${({ w }) => w || '100px'};
`;

const TabView = styled.div`
fontSize: 24,
paddingTop: 16,
marginBottom: 12,
fontWeight: 400,
`;

const MenuContent = styled.div`
  margin: 35px 18px;
  font-size: 18px;
`;

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
              <TabView></TabView>
              <MenuContent>
                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>

                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>

                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>

                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>
              </MenuContent>
            </div>
          </Tab>
          <Tab label="Breakfast" value="b">
            <div>
              <TabView></TabView>
              <MenuContent>
                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>

                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>

                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>
              </MenuContent>
            </div>
          </Tab>
          <Tab label="Mains" value="c">
            <div>
              <TabView></TabView>
              <MenuContent>
                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>

                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>

                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>
              </MenuContent>
            </div>
          </Tab>
          <Tab label="Snacks" value="d">
            <div>
              <TabView></TabView>
              <MenuContent>
                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>

                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>

                <ItemName> vodka</ItemName>
                <ItemPrice>50$ </ItemPrice>
                <ItemDescription>
                  lorem ipsum description about the product{' '}
                </ItemDescription>
              </MenuContent>
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
