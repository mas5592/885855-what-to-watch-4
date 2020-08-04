import {extend} from '../../utils/utils.js';
import {normalizeFilmData, normalizeFilmsData} from '../../utils/utils.js';

const initialState = {
  promo: {},
  films: [],
  currentFilmComments: []
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_COMMENTS: `LOAD_COMMENTS`
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`).then((response) => {
      dispatch(ActionCreator.loadFilms(normalizeFilmsData(response.data)));
    });
  },
  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`).then((response) => {
      dispatch(ActionCreator.loadPromo(normalizeFilmData(response.data)));
    });
  },
  loadComments: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`).then((response) => {
      dispatch(ActionCreator.loadComments(response.data));
    });
  }
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  loadPromo: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promo: action.payload
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        currentFilmComments: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
