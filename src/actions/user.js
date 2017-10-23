import axios from 'axios';

export const LOGOUT = 'LOGOUT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const TRY_LOGIN = 'TRY_LOGIN'
export const TRY_SIGNUP = 'TRY_SIGNUP'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const TOGGLE_LOGIN_DIALOG = 'TOGGLE_LOGIN_DIALOG'

export const tryLogin = () => ({ type: TRY_LOGIN })
export const loginSuccess = () => ({ type: LOGIN_SUCCESS })
export const logout = () => ({ type: LOGOUT })
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: { error } })
export const toggleLoginDialog = () => ({ type: TOGGLE_LOGIN_DIALOG })

const api =  { 
  signup: 'api/users',
  login: '/api/users/login'
}

export const loginSignupRequest = (url, userDetail) => {
  return async (dispatch) => {
    dispatch(tryLogin())

    try {
      const res = await axios.post(api[url], userDetail);
      const token = res.data.token;
      localStorage.token = token;
      axios.defaults.headers.common['Authorization'] = token;
      // just to have time for the 'loading-spinnner'
      setTimeout(function () {
        dispatch(loginSuccess());
      }, 2000);
    }

    catch ({ response: { status } }) {
      dispatch(loginFailure(status));
    }
  }
}




