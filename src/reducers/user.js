import { TRY_LOGIN, LOGIN, LOGOUT, LOGIN_FAILURE } from '../actions/user.js'

const initialState = {
    loggedIn: localStorage.token ? true : false,
    loginPending: false,
    loginError: false,
}


export function user(state = initialState, action) {
    switch (action.type) {
        case TRY_LOGIN:
            return { ...state, loginPending: true }
        case LOGIN:
            return { ...state, loggedIn: true, loginPending: false, showLoginForm: false }
        case LOGOUT:
            return { ...state, loggedIn: false }
        case LOGIN_FAILURE:
            return { ...state, loginError: action.error, loginPending: false }
        default:
            return state;
    }
}