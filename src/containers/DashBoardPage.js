import React, { Component } from 'react';
import DashBoard from '../pages/DashBoard/DashBoardPage';

export default class DashBoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = { state: '' };
  }
  render() {
    return <DashBoard state={this.state.state} />;
  }
}
