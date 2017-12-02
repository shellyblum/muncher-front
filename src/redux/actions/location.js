import axios from 'axios';
import { PENDING_REQUEST, SUCCESS_LOCATIONS, GET_ERROR } from '../constants/location';

const api = {
  getLocations: 'http://localhost:9000/api/v1/locations'
};

export const pendingRequest = () => ({ type: PENDING_REQUEST });
export const successRequest = data => ({ type: SUCCESS_LOCATIONS, payload: data });
export const failedRequest = error => ({ type: GET_ERROR, payload: error });

export const getAllLocations = () => async dispatch => {
  dispatch(pendingRequest());
  try {
    const res = await axios.get(api.getLocations);
    // timeout just to see if the dispatch works a
    setTimeout(() => dispatch(successRequest(res.data)), 2500);
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
