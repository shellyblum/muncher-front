import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { injectGlobal } from 'styled-components';
import SignupPage from '../SignupPage/signupPage';
import HomePage from '../../pages/HomePage/HomePage';
import Header from '../Header/header';
import location from '../../pages/location/location';
import Home from '../../pages/home/Home';

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
          <Route path="/location" component={location} />
          <Route path="/home" component={Home} />
          <Route component={() => <h1>Oops.. page not found</h1>} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </Router>
);
export default App;
