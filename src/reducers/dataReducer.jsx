import {FETCH_ALL} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return state;
  }
};