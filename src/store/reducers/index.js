import { TOGGLE_LOCKED, TOGGLE_CLOSED } from '../actions';

const initialState = {
  locked: false,
  closed: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOCKED:
      return {
        ...state,
        locked: action.payload
      };
    case TOGGLE_CLOSED:
      return {
        ...state,
        closed: action.payload
      };
    default:
      return state;
  }
};
