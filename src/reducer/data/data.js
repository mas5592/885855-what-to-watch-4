import {extend} from '../../utils/utils';
import {adaptFilm} from '../../adapters/film';
import {ActionCreator as AppStateActionCreator} from '../state/state';

const initialState = {
  card: {},
  films: [],
  filmReviews: [],
  favoriteFilms: [],
  isLoading: true,
  isLoadError: false,
  isDataSending: false,
  isDispatchSuccessful: false,
  isDispatchError: false,
};

const ActionType = {
  CATCH_LOAD_ERROR: `CATCH_LOAD_ERROR`,
  CHECK_IS_DATA_SENDING: `CHECK_IS_DATA_SENDING`,
  CHECK_IS_DISPATCH_ERROR: `CHECK_IS_DISPATCH_ERROR`,
  CHECK_IS_DISPATCH_SUCCESSFUL: `CHECK_IS_DISPATCH_SUCCESSFUL`,
  CLEAR_SENDING_ERROR: `CLEAR_SENDING_ERROR`,
  FINISH_LOADING: `FINISH_LOADING`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  LOAD_FILM_CARD: `LOAD_FILM_CARD`,
  LOAD_FILM_REVIEWS: `LOAD_FILM_REVIEWS`,
  LOAD_FILMS: `LOAD_FILMS`,
};

const ActionCreator = {
  loadFilms: (card) => {
    return {
      type: ActionType.LOAD_FILM_CARD,
      payload: card
    };
  },

  loadPromo: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },

  loadFilmReviews: (filmReviews) => {
    return {
      type: ActionType.LOAD_FILM_REVIEWS,
      payload: filmReviews,
    };
  },
  loadFavoriteFilms: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films,
  }),
  finishLoading: () => ({
    type: ActionType.FINISH_LOADING,
    payload: false,
  }),

  catchLoadError: () => ({
    type: ActionType.CATCH_LOAD_ERROR,
    payload: true,
  }),

  checkIsDataSending: (isDataSending) => ({
    type: ActionType.CHECK_IS_DATA_SENDING,
    payload: isDataSending,
  }),

  checkIsDispatchSuccessful: (isDispatchSuccessful) => ({
    type: ActionType.CHECK_IS_DISPATCH_SUCCESSFUL,
    payload: isDispatchSuccessful,
  }),

  checkIsDispatchError: (isDispatchError) => ({
    type: ActionType.CHECK_IS_DISPATCH_ERROR,
    payload: isDispatchError,
  }),

  clearSendingError: () => ({
    type: ActionType.CLEAR_SENDING_ERROR,
    payload: false,
  }),
};

const Operations = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(adaptFilm(response.data)));
        dispatch(AppStateActionCreator.setActiveFilm(adaptFilm(response.data)));

      })
      .catch(() => {
        dispatch(ActionCreator.catchLoadError());
      });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = response.data.map((film) => adaptFilm(film));
        dispatch(ActionCreator.loadPromo(films));
        dispatch(ActionCreator.finishLoading());
      })
      .catch(() => {
        dispatch(ActionCreator.catchLoadError());
      });
  },

  loadFilmReviews: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        dispatch(ActionCreator.loadFilmReviews(response.data));
      })
      .catch(() => {
        dispatch(ActionCreator.catchLoadError());
      });
  },
  pushReview: (filmId, review) => (dispatch, getState, api) => {
    dispatch(ActionCreator.checkIsDataSending(true));
    return api.post(`/comments/${filmId}`, {
      rating: review.rating,
      comment: review.comment,
    })
    .then(() => {
      dispatch(ActionCreator.checkIsDataSending(false));
      dispatch(ActionCreator.checkIsDispatchSuccessful(true));
      dispatch(ActionCreator.checkIsDispatchError(false));

      dispatch(Operations.loadFilmReviews(filmId));
      history.goBack();
    })
    .catch(() => {
      dispatch(ActionCreator.checkIsDataSending(false));
      dispatch(ActionCreator.checkIsDispatchSuccessful(false));
      dispatch(ActionCreator.checkIsDispatchError(true));
    });
  },
  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      if (response.data) {
        const favoriteFilms = response.data.map((favoriteFilm) => adaptFilm(favoriteFilm));
        dispatch(ActionCreator.loadFavoriteFilms(favoriteFilms));
      }
    })
    .catch(() => {
      dispatch(ActionCreator.catchLoadError());
    });
  },
  changeIsFilmFavorite: (filmId, isFavorite) => (dispatch, getState, api) => {
    dispatch(ActionCreator.checkIsDataSending(true));
    return api.post(`/favorite/${filmId}/${isFavorite ? 1 : 0}`)
    .then(() => {
      dispatch(ActionCreator.checkIsDataSending(false));
      dispatch(ActionCreator.checkIsDispatchSuccessful(true));
      dispatch(ActionCreator.checkIsDispatchError(false));
      dispatch(Operations.loadPromo());
      dispatch(Operations.loadFilms());
    })
    .catch(() => {
      dispatch(ActionCreator.checkIsDataSending(false));
      dispatch(ActionCreator.checkIsDispatchSuccessful(false));
      dispatch(ActionCreator.checkIsDispatchError(true));
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM_CARD:
      return extend(state, {
        card: action.payload,
      });
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_FILM_REVIEWS:
      return extend(state, {
        filmReviews: action.payload,
      });
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });
    case ActionType.FINISH_LOADING:
      return extend(state, {
        isLoading: action.payload,
      });
    case ActionType.CATCH_LOAD_ERROR:
      return extend(state, {
        isLoadError: action.payload,
      });
    case ActionType.CHECK_IS_DATA_SENDING:
      return extend(state, {
        isDataSending: action.payload,
      });
    case ActionType.CHECK_IS_DISPATCH_SUCCESSFUL:
      return extend(state, {
        isDispatchSuccessful: action.payload,
      });
    case ActionType.CHECK_IS_DISPATCH_ERROR:
      return extend(state, {
        isDispatchError: action.payload,
      });
    case ActionType.CLEAR_SENDING_ERROR:
      return extend(state, {
        isDispatchError: action.payload,
      });

  }

  return state;
};

export {ActionType, ActionCreator, Operations, reducer, initialState};
