import React from 'react';
import MovieCard from '../movie-card/movie-card.jsx';
import PropTypes from 'prop-types';

const MoviesList = ({onFilmCardMouseOver, onFilmCardMouseOut, activeFilmId, isPlaying, films, onFilmCardClick}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film, index) => (
        <MovieCard
          key={film.name + index}
          film={film}
          onFilmCardClick={() => onFilmCardClick(film)}
          onFilmCardMouseOver={() => onFilmCardMouseOver(index)}
          onFilmCardMouseOut={onFilmCardMouseOut}
          isPlaying={activeFilmId === index && isPlaying}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
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
      })
  ).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmCardMouseOver: PropTypes.func.isRequired,
  onFilmCardMouseOut: PropTypes.func.isRequired,
  activeFilmId: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired
};

export default MoviesList;
