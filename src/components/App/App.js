import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { injectGlobal } from 'styled-components';
import SignupPage from '../../components/SignupPage/SignupPage';
import HomePage from '../../pages/HomePage/HomePage';
import DashBoardPage from '../../containers/DashBoardPage';
import Header from '../Header/Header';

export const global = injectGlobal`
  body {
    font-family: roboto;
    margin: 0;
  }
`;

const App = () => (
  <Router>
    <MuiThemeProvider>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={SignupPage} />
          <Route exact path="/dashboard" component={DashBoardPage} />
          <Route component={() => <h1>Oops.. page not found</h1>} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </Router>
);
export default App;
