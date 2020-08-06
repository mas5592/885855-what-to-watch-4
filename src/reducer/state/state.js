import {extend} from '../../utils/utils';
import {FILTER_ALL_GENRES, LIMIT_FILMS_COUNT, PageNames} from "../../const";

const initialState = {
  activeGenre: FILTER_ALL_GENRES,
  activeFilm: {},
  cardsToShow: LIMIT_FILMS_COUNT,
  isVideoPlayer: false,
  currentPage: PageNames.MAIN,
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_CURRENT_FILM: `SET_CURRENT_FILM`,
  PLAY_FILM: `PLAY_FILM`,
  STOP_FILM: `STOP_FILM`,
  ADD_REVIEW: `ADD_REVIEW`,
};

const ActionCreator = {
  changeFilter: (activeGenre) => ({
    type: ActionType.SET_CURRENT_GENRE,
    payload: activeGenre,
  }),
  setActiveFilm: (film) => {
    return {
      type: ActionType.SET_CURRENT_FILM,
      payload: film,
    };
  },
  addReview: () => {
    return {
      type: ActionType.ADD_REVIEW,
      payload: PageNames.ADD_REVIEW,
    };
  },
  playFullFilm: (isVideoPlayer) => ({
    type: ActionType.PLAY_FILM,
    payload: isVideoPlayer,
  }),
  closeFulFilm: (isVideoPlayer) => ({
    type: ActionType.STOP_FILM,
    payload: isVideoPlayer,
  }),
};

const reducer = (state = extend(initialState), action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case (ActionType.PLAY_FILM):
      return extend(state, {
        isVideoPlayer: action.payload,
      });
    case ActionType.SET_CURRENT_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });
    case (ActionType.STOP_FILM):
      return extend(state, {
        isVideoPlayer: action.payload,
      });
    case ActionType.ADD_REVIEW:
      return extend(state, {
        currentPage: action.payload,
      });
  }

  return state;
};

export {initialState, reducer, ActionType, ActionCreator};
