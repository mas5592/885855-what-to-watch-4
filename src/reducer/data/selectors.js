import {createSelector} from 'reselect';
import Namespace from '../namespace.js';
import {FILTER_ALL_GENRES} from '../../data.js';

export const loadFilms = (state) => {
  return state[Namespace.DATA].films;
};

export const loadPromo = (state) => {
  return state[Namespace.DATA].promo;
};

export const loadComments = (state) => {
  return state[Namespace.DATA].currentFilmComments;
};

const filterFilmsByGenre = (state) => {
  const films = state[Namespace.DATA].films;
  const showedFilms = state[Namespace.STATE].showedFilms;
  const genre = state[Namespace.STATE].genre;

  return genre === FILTER_ALL_GENRES
    ? films.slice(0, showedFilms)
    : films.filter((film) => film.genre === genre).slice(0, showedFilms);
};

export const loadFilmsByGenre = createSelector(
    (state) => state,
    filterFilmsByGenre
);
