import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import ReusableForm from '../ReusableForm/reusableForm';
import { loginSignupRequest } from '../../actions/user';
import { messages } from '../../helpers/messages';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
      errors: { UsernameError: '', PasswordError: '' }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginRequest = this.handleLoginRequest.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({
      [target.name]: target.value,
      errors: { ...this.state.errors, [`${target.name}Error`]: '' }
    });
  }

  handleLoginRequest() {
    const { dispatch } = this.props;
    const { Username, Password } = this.state;
    if (Username && Password) {
      dispatch(loginSignupRequest('login', { Username, Password }));
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          [Username ? 'PasswordError' : 'UsernameError']: messages.requiredField
        }
      });
    }
  }

  render() {
    const fields = [
      { name: 'Username', type: 'text' },
      { name: 'Password', type: 'password' }
    ];
    return (
      <div>
        <ReusableForm
          fields={fields}
          errors={this.state.errors}
          handleInputChange={this.handleInputChange}
        />
        <RaisedButton primary onClick={this.handleLoginRequest} label="Login" />
      </div>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(LoginForm);
