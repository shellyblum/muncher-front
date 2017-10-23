import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginDialog from '../../containers/login.js'


class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>

          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to Muncher</h1>
            </header>
            <LoginDialog />

            {/*<Link to='/login'>Login</Link>

            <Route path="/login" component={Login} />*/}
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;

