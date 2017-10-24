import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { injectGlobal } from 'styled-components';
import SignupPage from '../SignupPage/signupPage';
import Header from '../Header/header';

export const global = injectGlobal`
  body {
    font-family: roboto;
    margin: 0;
  }
`;

const App = () => (
  <Router>
    <MuiThemeProvider>
      <Header />

      <Route path="/signup" component={SignupPage} />
    </MuiThemeProvider>
  </Router>
);
export default App;
