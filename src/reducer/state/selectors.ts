import NameSpace from '../name-space';
import {getFilms} from '../data/selectors';
import {FILTER_ALL_GENRES, LIMIT_FILMS_COUNT} from '../../const';
import {createSelector} from 'reselect';

export const getActiveFilm = (state) => state[NameSpace.STATE].activeFilm;

export const getActiveFilmById = (state, ownProps) => {
  const films = getFilms(state);
  const filmId = parseInt(ownProps.routeProps.match.params.id, 10);
  const [activeFilm] = films.filter((film) => film.id === filmId);

  return activeFilm;
};

export const getIsFilmPlayerActive = (state) => state[NameSpace.STATE].isVideoPlayer;

export const getActiveGenre = (state) => state[NameSpace.STATE].activeGenre;

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
