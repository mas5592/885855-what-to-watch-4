import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player.jsx';
import {CustomPropTypes} from '../../utils/props.js';
import {AppRoute} from '../../const.js';

const MovieCard = (props) => {
  const {film, isPlaying, setPlayingFilm} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => setPlayingFilm(true)}
      onMouseLeave={() => setPlayingFilm(false)}
    >
      <Link
        className="small-movie-card__link"
        to={`${AppRoute.PAGE}/${film.id}`}>
        <div
          className="small-movie-card__image">
          <VideoPlayer
            film={film}
            isPlaying={isPlaying}
            source={film.videoPreview}
            poster={film.picture}
          />
          <img
            src={film.poster}
            alt={film.name}
            width={280}
            height={175}
          />
        </div>
        <h3 className="small-movie-card__title">{film.title}</h3>
      </Link>
    </article>
  );
};


MovieCard.propTypes = {
  film: CustomPropTypes.FILM,
  onFilmHover: PropTypes.func,
  isPlaying: PropTypes.bool,
  setPlayingFilm: PropTypes.func,
};

export default MovieCard;

