import { PENDING_REQUEST, GET_ERROR, SUCCESS_LOCATIONS } from '../constants/location';

const initialState = {
  locations: [],
  gettingLocations: false,
  Error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PENDING_REQUEST:
      return { ...state, gettingLocations: true };
    case SUCCESS_LOCATIONS:
      return {
        Error: false,
        gettingLocations: false,
        locations: action.payload.data
      };
    case GET_ERROR:
      return {
        ...state,
        loginError: action.payload.error,
        gettingLocations: false
      };
    default:
      return state;
  }
};
