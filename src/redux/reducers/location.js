import { TRY_LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_FAILURE, TOGGLE_LOGIN_DIALOG } from '../constants/user';

const initialState = {
  locations: !!localStorage.token, // local storage is missing here
  getPending: false,
  Error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRY_LOGIN:
      return { ...state, loginPending: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loginPending: false,
        loginDialogOpen: false
      };
    case LOGOUT:
      return { ...state, loggedIn: false };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload.error,
        loginPending: false
      };
    case TOGGLE_LOGIN_DIALOG:
      return { ...state, loginDialogOpen: !state.loginDialogOpen };
    default:
      return state;
  }
};
