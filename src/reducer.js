import {extend} from './utils/utils.js';
import {FILTER_ALL_GENRES} from './data.js';

const initialState = {
  currentGenre: FILTER_ALL_GENRES,
  films: [],
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_FILMS: `SET_FILMS`,
};

const setCurrentGenre = (genre) => {
  return {
    type: ActionType.SET_CURRENT_GENRE,
    payload: genre,
  };
};

const setFilms = (films) => {
  return {
    type: ActionType.SET_FILMS,
    payload: films,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(
          state, {
            currentGenre: action.payload
          });

    case ActionType.SET_FILMS:
      return extend(
          state, {
            films: action.payload
          });

    default:
      return state;
  }
};

export {reducer, ActionType, setCurrentGenre, setFilms};
