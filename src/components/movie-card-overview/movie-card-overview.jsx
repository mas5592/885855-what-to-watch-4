import React from 'react';
import PropTypes from 'prop-types';

const MovieCardOverview = (props) => {
  const {film} = props;
  const {description, team, rating} = film;
  const {director, starring} = team;
  const {score, level, count} = rating;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{level}</span>
          <span className="movie-rating__count">{count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring} and other</strong></p>
      </div>
    </>
  );
};

MovieCardOverview.propTypes = {
  film: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    }).isRequired,
    team: PropTypes.shape({
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default MovieCardOverview;
