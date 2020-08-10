import * as React from 'react';
import {FilmType} from '../../types';

interface Props {
  activeFilm: FilmType;
}

const MovieCardDetails: React.FC<Props> = (props: Props) => {
  const {
    activeFilm
  } = props;

  const {
    date,
    director,
    filmDurationTime,
    genre,
    starring,
  } = activeFilm;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">{starring}</span>
        </p>
      </div>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{filmDurationTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{date}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCardDetails;
