import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../movies-list/movies-list.jsx';
import withActiveMovieItem from '../../hocs/with-active-movie-item/with-active-movie-item.jsx';

const MoviesListWrapped = withActiveMovieItem(MoviesList);

const getMoviesSimilar = (films, film) => {
  return films.filter(
      (activeFilm) =>
        activeFilm.genre === film.genre && activeFilm.name !== film.name
  );
};

const MoviesSimilar = ({films, film, onFilmCardClick}) => {
  return (
    <MoviesListWrapped
      films={getMoviesSimilar(films, film)}
      onFilmCardClick={onFilmCardClick}
    />
  );
};

MoviesSimilar.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        poster: PropTypes.string,
        previewUrl: PropTypes.string,
        coverBackground: PropTypes.string,
        backgroundColor: PropTypes.string,
        description: PropTypes.string,
        rating: PropTypes.number,
        count: PropTypes.number,
        director: PropTypes.string,
        starring: PropTypes.arrayOf(PropTypes.string),
        runTime: PropTypes.string,
        genre: PropTypes.string,
        releaseYear: PropTypes.number,
        id: PropTypes.number,
        isFavorite: PropTypes.bool,
        videoUrl: PropTypes.string,
        trailerUrl: PropTypes.string
      }).isRequired
  ).isRequired,
  film: PropTypes.shape({
    name: PropTypes.string,
    poster: PropTypes.string,
    previewUrl: PropTypes.string,
    coverBackground: PropTypes.string,
    backgroundColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    count: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.string,
    genre: PropTypes.string,
    releaseYear: PropTypes.number,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoUrl: PropTypes.string,
    trailerUrl: PropTypes.string
  }).isRequired,
  onFilmCardClick: PropTypes.func.isRequired
};

export default MoviesSimilar;
