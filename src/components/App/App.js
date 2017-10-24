import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <h1>Home Page... coming soon..</h1>}
          />
          <Route path="/signup" component={SignupPage} />
          <Route component={() => <h1>Oops.. page not found</h1>} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </Router>
);
export default App;
