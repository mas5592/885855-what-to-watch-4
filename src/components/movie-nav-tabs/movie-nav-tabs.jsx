import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getTextRating} from '../../utils/utils';
import {connect} from 'react-redux';
import {loadComments} from '../../reducer/data/selectors.js';
import {ListFilters} from '../../data.js';

class MovieNavTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeTab: ListFilters.OVERVIEW};
    this.getActiveClass = this.getActiveClass.bind(this);
  }

  getActiveClass(listFilters) {
    return this.state.activeTab === listFilters ? `movie-nav__item--active` : ``;
  }

  render() {
    const {film, comments} = this.props;
    const {activeTab} = this.state;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${this.getActiveClass(ListFilters.OVERVIEW)}`}>
              <a className="movie-nav__link" onClick={() => this.setState({activeTab: ListFilters.OVERVIEW})}>Overview</a>
            </li>
            <li className={`movie-nav__item ${this.getActiveClass(ListFilters.DETAILS)}`}>
              <a className="movie-nav__link" onClick={() => this.setState({activeTab: ListFilters.DETAILS})}>Details</a>
            </li>
            <li className={`movie-nav__item ${this.getActiveClass(ListFilters.REVIEWS)}`}>
              <a className="movie-nav__link" onClick={() => this.setState({activeTab: ListFilters.REVIEWS})}>Reviews</a>
            </li>
          </ul>
        </nav>

        {activeTab === ListFilters.OVERVIEW && (
          <>
            <div className="movie-rating">
              <div className="movie-rating__score">{film.rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">
                  {getTextRating(film.rating)}
                </span>
                <span className="movie-rating__count">
                  {film.count} ratings
                </span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{film.description}</p>

              <p className="movie-card__director">
                <strong>Director: {film.director}</strong>
              </p>

              <p className="movie-card__starring">
                <strong>
                  Starring: {`${film.starring.join(`, `)} and other`}
                </strong>
              </p>
            </div>
          </>
        )}

        {activeTab === ListFilters.DETAILS && (
          <>
            <div className="movie-card__text movie-card__row">
              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Director</strong>
                  <span className="movie-card__details-value">
                    {film.director}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Starring</strong>
                  <span className="movie-card__details-value">
                    {film.starring.map((actor, index) => (
                      <React.Fragment key={actor + index}>
                        {actor} <br />
                      </React.Fragment>
                    ))}
                  </span>
                </p>
              </div>

              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Run Time</strong>
                  <span className="movie-card__details-value">
                    {film.runTime}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Genre</strong>
                  <span className="movie-card__details-value">
                    {film.genre}
                  </span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Released</strong>
                  <span className="movie-card__details-value">
                    {film.releaseYear}
                  </span>
                </p>
              </div>
            </div>
          </>
        )}

        {activeTab === ListFilters.REVIEWS && (
          <>
            <div className="movie-card__reviews movie-card__row">
              <div className="movie-card__reviews-col">
                {comments.map((review) => (
                  <div className="review" key={review.id}>
                    <blockquote className="review__quote">
                      <p className="review__text">{review.comment}</p>

                      <footer className="review__details">
                        <cite className="review__author">
                          {review.user.name}
                        </cite>
                        <time className="review__date" dateTime={review.date}>
                          {review.date}
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{review.rating}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

MovieNavTabs.propTypes = {
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
  comments: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string,
        date: PropTypes.string,
        id: PropTypes.number,
        rating: PropTypes.number,
        user: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string
        })
      })
  )
};

const mapStateToProps = (state) => ({
  comments: loadComments(state)
});

export default connect(mapStateToProps)(MovieNavTabs);
