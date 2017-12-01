import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import LoginForm from '../components/LoginForm/LoginForm';
import { toggleLoginDialog } from '../redux/actions/user';
import messages from '../helpers/messages';

const LoginDialog = ({ toggleDialog, loginDialogOpen }) => {
  const actions = [
    <Link to="/signup">
      <FlatButton
        label="Not registered? Register now!"
        primary
        onClick={toggleDialog}
      />
    </Link>,
    <FlatButton label="Cancel" secondary onClick={toggleDialog} />
  ];

  return (
    <div>
      <RaisedButton label="Login" onClick={toggleDialog} />
      <Dialog
        title={messages.loginDialogTitle}
        actions={actions}
        modal={false}
        open={loginDialogOpen}
        onRequestClose={toggleDialog}
        style={{ textAlign: 'center' }}
      >
        <LoginForm />
      </Dialog>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  const { loginDialogOpen } = user;
  return {
    loginDialogOpen
  };
};

const mapDispatchToProps = dispatch => ({
  toggleDialog: () => {
    dispatch(toggleLoginDialog());
  }
});

LoginDialog.propTypes = {
  toggleDialog: PropTypes.func.isRequired,
  loginDialogOpen: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
