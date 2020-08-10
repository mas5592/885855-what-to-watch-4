import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import PageHeader from '../page-header/page-header';
import MyListBtn from '../my-list-btn/my-list-btn';
import {AuthorizationStatus, AppRoute, PageNames} from '../../const';
import {FilmType} from '../../types';

interface Props {
  activeFilm: FilmType;
  isSignedIn: boolean;
}
const cardHero: React.FunctionComponent<Props> = (props: Props) => {
  const {
    activeFilm,
    isSignedIn
  } = props;

  const addReviewBtn = (
    <Link
      to={`${AppRoute.PAGE}/${activeFilm.id}/review`}
      className="btn movie-card__button"
    >Add review
    </Link>
  );

  return (
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img
          src={activeFilm.coverBackground}
          alt={activeFilm.title}
        />
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
              <svg
                viewBox="0 0 19 19"
                width={19}
                height={19}>
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </Link>
            <MyListBtn
              film={activeFilm}
            />
            {addReviewBtn}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSignedIn: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

export default connect(mapStateToProps)(cardHero);
