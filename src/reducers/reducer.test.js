import { reducerCharacters, reducerPers, initialStateCharacters, initialStatePers } from "./";
import * as types from "../actions/actionTypes";

describe("reducer Characters", () => {
  it("GET_CHARACTERS_REQUEST", () => {
    const action = {
      type: types.GET_CHARACTERS_REQUEST
    };

    expect(reducerCharacters(initialStateCharacters, action)).toEqual({
      ...initialStateCharacters,
      isFetching: true,
      error: null
    });
  });

  it("GET_CHARACTERS_SUCCESS", () => {
    const action = {
      type: types.GET_CHARACTERS_SUCCESS,
      payload: {}
    };

    expect(reducerCharacters(initialStateCharacters, action)).toEqual({
      ...initialStateCharacters,
      isFetching: false,
      payload: action.payload,
      error: null
    });
  });

  it("GET_CHARACTERS_FAILED", () => {
    const action = {
      type: types.GET_CHARACTERS_FAILED,
      payload: {}
    };

    expect(reducerCharacters(initialStateCharacters, action)).toEqual({
      ...initialStateCharacters,
      isFetching: false,
      error: action.payload
    });
  });

  it("should return the initial state", () => {
    expect(reducerCharacters(undefined, {})).toEqual(initialStateCharacters);
  });
});

describe("reducer Pers", () => {
  it("GET_CHARACTERS_REQUEST", () => {
    const action = {
      type: types.GET_PERS_REQUEST
    };

    expect(reducerPers(initialStatePers, action)).toEqual({
      ...initialStatePers,
      isFetching: true,
      error: null
    });
  });
});
