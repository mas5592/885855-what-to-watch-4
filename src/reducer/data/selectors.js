import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {FILTER_ALL_GENRES, LIMIT_FILMS_COUNT} from '../../const';
import {getActiveGenre, getActiveFilm} from '../state/selectors';

export const getFilms = (state) => state[NameSpace.DATA].films;
export const getFilm = (state) => state[NameSpace.DATA].card;
export const getFilmReviews = (state) => state[NameSpace.DATA].filmReviews;

export const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
export const getIsLoadError = (state) => state[NameSpace.DATA].isLoadError;
export const getIsReviewSending = (state) => state[NameSpace.DATA].isDataSending;
export const getIsDispatchSuccessful = (state) => state[NameSpace.DATA].isDispatchSuccessful;
export const getIsDispatchError = (state) => state[NameSpace.DATA].isDispatchError;
export const getIsLoading = (state) => state[NameSpace.DATA].isLoading;

export const getFilmsByGenre = createSelector(
    getFilms,
    (films) => {
      const genres = new Set(films.map((film) => film.genre));
      return [FILTER_ALL_GENRES, ...genres];
    }
);

export const getFilteredFilmsByGenre = createSelector(
    getFilms,
    getActiveGenre,
    (films, activeGenre) => {
      if (activeGenre === FILTER_ALL_GENRES) {
        return films;
      } else {
        return films.filter((film) => film.genre === activeGenre);
      }
    }
);

export const getFilteredFilmsLikeThis = createSelector(
    getFilteredFilmsByGenre,
    getActiveFilm,
    (filteredFilms, activeFilm) => {
      return (filteredFilms
          .filter((film) => film.id !== activeFilm.id)
          .slice(0, LIMIT_FILMS_COUNT)
      );
    }
);
