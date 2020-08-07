import NameSpace from '../name-space';
import {getFilms} from '../data/selectors';

export const getActiveFilm = (state) => state[NameSpace.STATE].activeFilm;

export const getActiveFilmById = (state, ownProps) => {
  const films = getFilms(state);
  const filmId = parseInt(ownProps.routeProps.match.params.id, 10);
  const [activeFilm] = films.filter((film) => film.id === filmId);

  return activeFilm;
};

export const getIsFilmPlayerActive = (state) => state[NameSpace.STATE].isVideoPlayer;

export const getActiveGenre = (state) => state[NameSpace.STATE].activeGenre;
