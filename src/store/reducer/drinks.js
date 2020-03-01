import {SET_DRINKS, CLEAR_DRINKS} from '../actions/drinks';

const initialState = {
  drinks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DRINKS:
      return {
        drinks: action.drinks,
      };
    case CLEAR_DRINKS:
      return initialState;
    default:
      return state;
  }
};
