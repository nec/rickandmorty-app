import { combineReducers } from "redux";

import * as types from "../actions/actionTypes";

export const initialStateCharacters = {
  isFetching: true,
  payload: {},
  error: null
};

export function reducerCharacters(state = initialStateCharacters, action) {
  switch (action.type) {
    case types.GET_CHARACTERS_REQUEST:
      return { ...state, isFetching: true, error: null };
    case types.GET_CHARACTERS_SUCCESS:
      return { ...state, isFetching: false, payload: action.payload };
    case types.GET_CHARACTERS_FAILED:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}

export const initialStatePers = {
  isFetching: true,
  payload: {},
  error: null
};

export function reducerPers(state = initialStatePers, action) {
  switch (action.type) {
    case types.GET_PERS_REQUEST:
      return { ...state, isFetching: true, error: null };
    case types.GET_PERS_SUCCESS:
      return { ...state, isFetching: false, payload: action.payload };
    case types.GET_PERS_FAILED:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducerCharacters,
  reducerPers
});

export default rootReducer;
