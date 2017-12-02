import { PENDING_REQUEST, GET_ERROR, SUCCESS_LOCATIONS } from '../constants/location';
import { cards } from './data';

const initialState = {
  locations: cards,
  filteredCards: cards,
  gettingLocations: false,
  selectedRest: {},
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PENDING_REQUEST:
      return { ...state, gettingLocations: true };
    case SUCCESS_LOCATIONS:
      return {
        ...state,
        gettingLocations: false,
        locations: action.payload,
        filteredCards: action.payload
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.payload,
        gettingLocations: false
      };
    default:
      return state;
  }
};
