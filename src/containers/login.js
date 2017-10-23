import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm/loginForm.js'
import { toggleLoginDialog } from '../actions/user.js'

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class LoginDialog extends React.Component {

    render() {
        const { toggleLoginDialog } = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={toggleLoginDialog}
            />,
        ];

        return (
            <div>
                <RaisedButton label="Login" onClick={toggleLoginDialog} />
                <Dialog
                    title="Login"
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