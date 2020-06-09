import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {SET_CATEGORIES, SET_ITEMS, SET_ITEM} from '../actions';

export const items = (state = [], {type, payload}) => {
  let nextState = state;

  if (type === SET_ITEMS) {
      nextState = payload;
  }

  return nextState;
};

export const currentItem = (state = {}, {type, payload}) => {
  let nextState = state;

  if (type === SET_ITEM) {
      nextState = payload;
  }

  return nextState;
};

export const categories = (state = [], {type, payload}) => {
  let nextState = state;

  if (type === SET_CATEGORIES) {
      nextState = payload;
  }

  return nextState;
};

export default combineReducers({
  currentItem,
  items,
  categories,
  routing: routerReducer,
});
