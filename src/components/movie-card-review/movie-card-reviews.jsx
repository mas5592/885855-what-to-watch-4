import React from 'react';
import PropTypes from 'prop-types';

const MovieCardReviews = (props) => {
  const {film} = props;
  const {review} = film;
  const {author, rating} = review;

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          <div className="review"
            key={film.id}
          >
            <blockquote className="review__quote">
              <p className="review__text">{film.description}</p>

              <footer className="review__details">
                <cite className="review__author">{author}</cite>
                <time className="review__date" dateTime="2016-12-24">{film.title}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{rating}</div>
          </div>
        </div>
      </div>
    </>
  );
};

MovieCardReviews.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    review: PropTypes.shape({
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired
  }).isRequired,
};

export default MovieCardReviews;
