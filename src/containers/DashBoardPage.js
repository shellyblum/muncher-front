import React, { Component } from 'react';
import DashBoard from '../pages/DashBoard/DashBoardPage';

class DashBoardPage extends Component {
  state = { state: '' };

  render() {
    return <DashBoard state={this.state.state} />;
  }
}

export default DashBoardPage;
