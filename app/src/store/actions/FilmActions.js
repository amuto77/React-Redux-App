import axios from "axios";

export const FETCHING_FILMS_START = "FETCHING_FILMS_START";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const fetchFilms = () => (dispatch) => {
  // dispatch FETCHING action
  dispatch({ type: FETCHING_FILMS_START });
  // make an axios call
  axios
    .get("https://ghibliapi.herokuapp.com/films/")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: FETCH_FILMS_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

// redux-thunk
const thunk = (store) => (next) => (action) => {
  if (typeof action === "object") {
    next(action);
  } else if (typeof action === "function") {
    action(store.dispatch);
  }
};