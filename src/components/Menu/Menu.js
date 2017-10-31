import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import MenuElements from './MenuElements/MenuElements';
import Body from './Menu.styles';
import data from './data';

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
          {data.map(item => (
            <Tab key={item.category} label={item.category} value={item.category}>
              <MenuElements items={item.list}>{item.list.name}</MenuElements>
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
