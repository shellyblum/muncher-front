import axios from 'axios';
import { getAlllocation } from '../constants/location';

export const getAlllocation = error => ({
  type: LOGIN_FAILURE,
  payload: { error }
});
export const toggleLoginDialog = () => ({ type: TOGGLE_LOGIN_DIALOG });

const api = {
  getLocations: '/api/v1/location/location'
};

export const loginSignupRequest = (url, userDetail) => async dispatch => {
  dispatch(tryLogin());
  try {
    const res = await axios.post(api[url], userDetail);
    const { token } = res.data;
    localStorage.token = token;
    axios.defaults.headers.common.Authorization = token;
    // just to have time for the 'loading-spinnner'
    dispatch(loginSuccess());
  } catch ({ response: { status } }) {
    dispatch(loginFailure(status));
  }
};
