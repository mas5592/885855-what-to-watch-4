import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import PageHeader from '../page-header/page-header.jsx';
import MyListButton from '../my-list-button/my-list-button.jsx';
import {AuthorizationStatus, AppRoute, PageNames} from '../../const.js';
import {CustomPropTypes} from '../../utils/props.js';

const MovieCardHero = ({
  activeFilm,
  isSignedIn
}) => {
  const addReviewButton = (
    <Link
      to={`${AppRoute.PAGE}/${activeFilm.id}/review`}
      className="btn movie-card__button"
    >Add review
    </Link>
  );

  return (
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={activeFilm.coverBackground} alt={activeFilm.title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <PageHeader
        currentPage={PageNames.FILM_DETAILS}
      />
      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{activeFilm.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{activeFilm.genre}</span>
            <span className="movie-card__year">{activeFilm.date}</span>
          </p>
          <div className="movie-card__buttons">
            <Link
              className="btn btn--play movie-card__button"
              to={`${AppRoute.VIDEO_PLAYER}/${activeFilm.id}`}
            >
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </Link>
            <MyListButton
              film={activeFilm}
            />
            {isSignedIn && addReviewButton}
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCardHero.propTypes = {
  activeFilm: CustomPropTypes.FILM,
  isSignedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isSignedIn: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

export default connect(mapStateToProps)(MovieCardHero);
