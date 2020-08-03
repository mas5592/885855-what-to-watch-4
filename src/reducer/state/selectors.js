import Namespace from '../namespace.js';

export const getGenre = (state) => {
  return state[Namespace.STATE].genre;
};
export const getShowedFilms = (state) => {
  return state[Namespace.STATE].showedFilms;
};
