import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginDialog from '../../containers/login';
import SignupPage from '../SignupPage/signupPage';

const App = () => (
  <Router>
    <MuiThemeProvider>
      <div>
        <header>
          <h1>Welcome to Muncher</h1>
        </header>
        <LoginDialog />

        <Route path="/signup" component={SignupPage} />
      </div>
    </MuiThemeProvider>
  </Router>
);
export default App;
