import {SET_DRINKS, CLEAR_DRINKS, SET_ERROR} from '../actions/drinks';

const initialState = {
  drinks: [],
  error:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DRINKS:
      return {
        drinks: action.payload,
      };
    case CLEAR_DRINKS:
      return initialState;
    case SET_ERROR:
      return{
        error: action.payload
      }
    default:
      return state;
  }
};
