import 'antd/lib/tabs/style/css';
import { Tabs } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import MenuElements from './MenuElements/MenuElements';
import Body from './Menu.styles';
import data from './data';

const { TabPane } = Tabs;

class Menu extends React.Component {
  state = { value: 'drinks' };

  render() {
    const { grid } = this.props;

    return (
      <Body width={grid}>
        <div className="card-container">
          <Tabs type="card" value={this.state.value} onChange={value => this.setState({ value })}>
            {data.map(item => (
              <TabPane tab={item.category} key={item.category}>
                <MenuElements items={item.list}>{item.list.name}</MenuElements>
              </TabPane>
            ))}
          </Tabs>
        </div>
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
