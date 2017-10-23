import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginRequest } from '../../actions/user.js'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', usernameError: '', passwordError: '' }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
    }

    handleInputChange({ target }) {
        this.setState({
            [target.name]: target.value,
            [`${target.name}Error`]: ''
        })
    }

    handleLoginRequest() {
        const { dispatch } = this.props;
        const { username, password } = this.state;
        if (username && password) {
            dispatch(loginRequest(username, password))
        }
        else {
            this.setState({ [username ? 'passwordError' : 'usernameError']: 'This field is required.' })
        }
    }

    render() {
        const { usernameError, passwordError } = this.state;
        return (
            <div style={{ margin: '3em' }}>
                <TextField
                    name='username'
                    hintText="Username"
                    errorText={usernameError}
                    onChange={this.handleInputChange}
                /><br />
                <TextField
                    name='password'
                    hintText="Password"
                    errorText={passwordError}
                    type='password'
                    onChange={this.handleInputChange}
                /><br />
                <RaisedButton primary onClick={this.handleLoginRequest} label="Login" />
            </div>
        );
    }
}

export default connect()(LoginForm)