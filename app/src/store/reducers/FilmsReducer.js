import { FETCHING_FILMS_START, FETCH_FILMS_SUCCESS } from "../actions";

const initialState = {
  films: [],
  isLoading: false,
  error: ""
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FILMS_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        films: action.payload
      };
    default:
      return state;
  }
};