import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import ReusableForm from '../ReusableForm/reusableForm';
import { loginSignupRequest } from '../../actions/user';
import { messages } from '../../helpers/messages';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        Username: '',
        Password: '',
        Firstname: '',
        Lastname: ''
      },
      errors: {
        UsernameError: '',
        PasswordError: '',
        FirstnameError: '',
        LastnameError: ''
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginRequest = this.handleLoginRequest.bind(this);
  }

  handleInputChange({ target }) {
    const { inputs, errors } = this.state;
    this.setState({
      inputs: { ...inputs, [target.name]: target.value },
      errors: { ...errors, [`${target.name}Error`]: '' }
    });
  }

  handleLoginRequest() {
    const { dispatch } = this.props;
    const { Username, Password, Firstname, Lastname } = this.state.inputs;
    if (Username && Password && Firstname && Lastname) {
      dispatch(loginSignupRequest('login', { Username, Password }));
    } else {
      const { inputs, errors } = this.state;
      const failedInputs = {};

      // NO FOR LOOPS!
      for (const key in inputs) {
        if (inputs[key].length === 0) {
          errors[`${key}Error`] = messages.requiredField;
        }
      }
      this.setState({ errors: { ...errors, ...failedInputs } });
    }
  }

  render() {
    const fields = [
      { name: 'Username', type: 'text' },
      { name: 'Password', type: 'password' },
      { name: 'Firstname', type: 'text' },
      { name: 'Lastname', type: 'text' }
    ];
    return (
      <div
        style={{
          width: '50%',
          margin: '0 auto',
          border: '1px solid lightgray',
          padding: '1em'
        }}
      >
        <h2>Please fill out the form</h2>
        <ReusableForm
          fields={fields}
          errors={this.state.errors}
          handleInputChange={this.handleInputChange}
        />
        <RaisedButton
          primary
          onClick={this.handleLoginRequest}
          label="Signup"
        />
      </div>
    );
  }
}

SignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SignupPage);
