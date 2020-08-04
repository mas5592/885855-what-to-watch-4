import {extend} from '../../utils/utils.js';
import {FILTER_ALL_GENRES, LIMIT_FILMS_COUNT} from '../../data.js';

const initialState = {
  genre: FILTER_ALL_GENRES,
  showedFilms: LIMIT_FILMS_COUNT
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_MORE_FILMS: `SET_MORE_FILMS`,
  RESET_SHOWED_FILMS_AMOUNT: `RESET_SHOWED_FILMS_AMOUNT`
};

const ActionCreator = {
  changeGenre: (genre = FILTER_ALL_GENRES) => ({
    type: ActionType.SET_CURRENT_GENRE,
    payload: genre
  }),
  showMoreFilms: () => ({
    type: ActionType.SET_MORE_FILMS,
    payload: null
  }),
  resetShowedFilmsAmount: () => ({
    type: ActionType.RESET_SHOWED_FILMS_AMOUNT,
    payload: null
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.SET_MORE_FILMS:
      return extend(state, {
        showedFilms: state.showedFilms + 8
      });
    case ActionType.RESET_SHOWED_FILMS_AMOUNT:
      return extend(state, {
        showedFilms: LIMIT_FILMS_COUNT
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
