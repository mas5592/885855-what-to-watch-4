import React from 'react';
import {CustomPropTypes} from '../../utils/props.js';
import {getTextRating} from '../../utils/utils.js';

const PageOverview = (card) => {
  const {
    rating,
    scores,
    description,
    director,
    starring
  } = card;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getTextRating(rating)}</span>
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
PageOverview.propTypes = {
  card: CustomPropTypes.FILM,
};
export default PageOverview;
