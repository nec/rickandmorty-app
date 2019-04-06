import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import * as types from "./actionTypes";
import { asyncAction, asyncActionPers } from "./index";

const mockStore = configureMockStore([thunk]);

describe("async character list", () => {
  afterEach(() => {
    fetchMock.reset();
  });

  it("GET_CHARACTERS_SUCCESS", async () => {
    const store = mockStore({});
    fetchMock.getOnce("*", {
      body: { status: 200 }
    });

    const expectedActions = [
      { type: types.GET_CHARACTERS_REQUEST },
      { type: types.GET_CHARACTERS_SUCCESS, payload: { status: 200 } }
    ];

    await store.dispatch(asyncAction());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("GET_CHARACTERS_FAILED get 404", async () => {
    const store = mockStore({});
    fetchMock.getOnce("*", { status: 404 });

    const expectedActions = [
      { type: types.GET_CHARACTERS_REQUEST },
      { type: types.GET_CHARACTERS_FAILED, payload: { status: 404, statusText: "Not Found" } }
    ];

    await store.dispatch(asyncAction());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("GET_CHARACTERS_FAILED get 503", async () => {
    const store = mockStore({});
    fetchMock.getOnce("*", { status: 503 });

    const expectedActions = [
      { type: types.GET_CHARACTERS_REQUEST },
      { type: types.GET_CHARACTERS_FAILED, payload: { status: 503, statusText: "Service Unavailable" } }
    ];

    await store.dispatch(asyncAction());

    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe("async character detail", () => {
  afterEach(() => {
    fetchMock.reset();
  });

  it("GET_PERS_REQUEST", async () => {
    const store = mockStore({});
    fetchMock.getOnce("https://rickandmortyapi.com/api/character/1", {
      body: { status: 200 }
    });

    const expectedActions = [
      { type: types.GET_PERS_REQUEST },
      { type: types.GET_PERS_SUCCESS, payload: { status: 200 } }
    ];

    await store.dispatch(asyncActionPers(1));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("GET_PERS_FAILED get 404", async () => {
    const store = mockStore({});
    fetchMock.getOnce("https://rickandmortyapi.com/api/character/1", { status: 404 });

    const expectedActions = [
      { type: types.GET_PERS_REQUEST },
      { type: types.GET_PERS_FAILED, payload: { status: 404, statusText: "Not Found" } }
    ];

    await store.dispatch(asyncActionPers(1));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("GET_PERS_FAILED get 503", async () => {
    const store = mockStore({});
    fetchMock.getOnce("https://rickandmortyapi.com/api/character/1", { status: 503 });

    const expectedActions = [
      { type: types.GET_PERS_REQUEST },
      { type: types.GET_PERS_FAILED, payload: { status: 503, statusText: "Service Unavailable" } }
    ];

    await store.dispatch(asyncActionPers(1));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
