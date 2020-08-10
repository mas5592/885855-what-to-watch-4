import * as React from 'react';
import {FilmType} from '../../types';
import {getFilmRatingDescription} from '../../utils.js';

interface Props {
  activeFilm: FilmType;
}

const PageOverview: React.FC<Props> = (props: Props) => {
  const {
    activeFilm
  } = props;

  const {
    rating,
    scores,
    description,
    director,
    starring
  } = activeFilm;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getFilmRatingDescription(rating)}</span>
          <span className="movie-rating__count">{scores} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
};

export default PageOverview;
