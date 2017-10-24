import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReusableForm from '../ReusableForm/reusableForm';
import { loginSignupRequest } from '../../actions/user';
import messages from '../../helpers/messages';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: { usernameError: '', passwordError: '' }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({
      [target.name]: target.value,
      errors: { ...this.state.errors, [`${target.name}Error`]: '' }
    });
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const { username, password } = this.state;
    if (username && password) {
      dispatch(loginSignupRequest('login', { username, password }));
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          [username ? 'passwordError' : 'usernameError']: messages.requiredField
        }
      });
    }
  }

  render() {
    const fields = [
      { name: 'username', type: 'text', placeHolder: 'Username' },
      { name: 'password', type: 'password', placeHolder: 'Password' }
    ];
    return (
      <ReusableForm
        fields={fields}
        errors={this.state.errors}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        submitLabel="Login"
      />
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(LoginForm);
