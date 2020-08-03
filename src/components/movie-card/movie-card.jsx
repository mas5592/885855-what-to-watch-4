import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const MovieCard = ({film, onFilmCardClick, onFilmCardMouseOver, onFilmCardMouseOut, isPlaying}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={onFilmCardMouseOver}
      onMouseOut={onFilmCardMouseOut}
      onClick={onFilmCardClick}
    >
      <div className="small-movie-card__image">
        {isPlaying ? (
          <VideoPlayer film={film} muted={true} autoPlay={true} />
        ) : (
          <img
            src={film.poster}
            alt={film.name}
            width="280"
            height="175"
          />
        )}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#">
          {film.name}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
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
  }),
  isPlaying: PropTypes.bool.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmCardMouseOver: PropTypes.func.isRequired,
  onFilmCardMouseOut: PropTypes.func.isRequired
};

export default MovieCard;
