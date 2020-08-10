import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {FILTER_ALL_GENRES} from '../../const';

export const getFilms = (state) => state[NameSpace.DATA].films;
export const getFilm = (state) => state[NameSpace.DATA].card;
export const getFilmReviews = (state) => state[NameSpace.DATA].filmReviews;

export const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
export const getIsLoadError = (state) => state[NameSpace.DATA].isLoadError;
export const getIsReviewSending = (state) => state[NameSpace.DATA].isReviewSending;
export const getIsDispatchSuccessful = (state) => state[NameSpace.DATA].isDispatchSuccessful;
export const getIsDispatchError = (state) => state[NameSpace.DATA].isDispatchError;
export const getIsLoading = (state) => state[NameSpace.DATA].isLoading;

export const getFilmsGenres = createSelector(
    getFilms,
    (films) => {
      const genres = new Set(films.map((film) => film.genre));
      return [FILTER_ALL_GENRES, ...genres];
    }
);

