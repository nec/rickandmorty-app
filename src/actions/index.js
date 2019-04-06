import * as types from "./actionTypes";

export const asyncAction = (page, filter) => {
  return async dispatch => {
    dispatch({
      type: types.GET_CHARACTERS_REQUEST
    });

    try {
      if (page && (!Number.isInteger(Number(page)) || Number(page) <= 0)) {
        throw new Error("not found");
      }
      const PAGE = page ? "?page=" + page : "";
      let QUERY = "";
      if (page) {
        QUERY = filter ? filter.toLowerCase().replace("?", "&") : "";
      } else {
        QUERY = filter ? filter.toLowerCase() : "";
      }

      let fetchres = await fetch(`https://rickandmortyapi.com/api/character/${PAGE}${QUERY}`);
      if (fetchres.ok) {
        let characters = await fetchres.json();
        dispatch({ type: types.GET_CHARACTERS_SUCCESS, payload: characters });
      } else {
        // if not OK (404)
        dispatch({
          type: types.GET_CHARACTERS_FAILED,
          payload: { statusText: fetchres.statusText, status: fetchres.status }
        });
      }
    } catch (e) {
      // if fetch failed
      dispatch({
        type: types.GET_CHARACTERS_FAILED,
        payload: { statusText: e.message, status: e.status }
      });
    }
  };
};

export const asyncActionPers = id => {
  return async dispatch => {
    dispatch({
      type: types.GET_PERS_REQUEST
    });

    try {
      const result = await fetch("https://rickandmortyapi.com/api/character/" + id);
      if (result.ok) {
        let character = await result.json();
        dispatch({ type: types.GET_PERS_SUCCESS, payload: character });
      } else {
        dispatch({
          type: types.GET_PERS_FAILED,
          payload: { statusText: result.statusText, status: result.status }
        });
      }
    } catch (e) {
      dispatch({
        type: types.GET_PERS_FAILED,
        payload: { statusText: e.message, status: e.status }
      });
    }
  };
};
