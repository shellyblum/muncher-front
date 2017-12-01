import axios from 'axios';
import { PENDING_REQUEST, SUCCESS_LOCATIONS } from '../constants/location';

export const pendingRequest = () => ({ type: PENDING_REQUEST });

export const successRequest = data => ({ type: SUCCESS_LOCATIONS, payload: data });

// export const getAlllocation = error => ({
//   type: LOGIN_FAILURE,
//   payload: { error }
// });

const api = {
  getLocations: 'http://localhost:9000/api/v1/locations'
};

export const getAlllocations = async dispatch => {
  dispatch(pendingRequest());
  try {
    const res = await axios.get(api.getLocations);
    dispatch(successRequest(res.data));
  } catch ({ response: { status } }) {
    console.log(status);
    // dispatch(loginFailure(status));
  }
};
