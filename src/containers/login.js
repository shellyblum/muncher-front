import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import LoginForm from '../components/LoginForm/loginForm.js'
import { toggleLoginDialog } from '../actions/user.js'
import {messages} from '../helpers/messages'

class LoginDialog extends React.Component {

  render() {
    const { toggleLoginDialog } = this.props;
    const actions = [
      <Link to='/signup'>
        <FlatButton
          label="Not registered? Register now!"
          primary={true}
          onClick={toggleLoginDialog}
        />
      </Link>,
      <FlatButton
        label="Cancel"
        secondary
        onClick={toggleLoginDialog}
      />

    ];

    return (
      <div>
        <RaisedButton label="Login" onClick={toggleLoginDialog} />
        <Dialog
          title={messages.loginDialogTitle}
          actions={actions}
          modal={false}
          open={this.props.loginDialogOpen}
          onRequestClose={toggleLoginDialog}

        >

          <LoginForm />

        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { loginDialogOpen } = user;
  return {
    loginDialogOpen
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleLoginDialog: () => {
      dispatch(toggleLoginDialog())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)