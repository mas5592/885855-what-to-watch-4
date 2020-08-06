import React from 'react';
import PropTypes from 'prop-types';
import GenresList from '../genres-list/genres-list.jsx';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import MoviesList from '../movies-list/movies-list.jsx';
import PageHeader from '../page-header/page-header.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import MyListButton from '../my-list-button/my-list-button.jsx';
import {CustomPropTypes} from '../../utils/props.js';
import {AppRoute, PageNames} from '../../const.js';
import {getFilm} from '../../reducer/data/selectors';
import withMovieNavTabs from '../../hocs/with-movie-nav-tabs.js';
import withShowMore from '../../hocs/with-show-more';

const MoviesListWrapped = withShowMore(withMovieNavTabs(MoviesList));
const GenresListWrapped = withMovieNavTabs(GenresList);

const Main = ({card}) => {
  const {
    title,
    genre,
    date,
    coverBackground,
    poster,
    id
  } = card;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={coverBackground}
            alt={title}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader currentPage={PageNames.MAIN}/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={poster}
                alt={title}
                width={218}
                height={327} />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{date}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`${AppRoute.VIDEO_PLAYER}/${id}`}
                  className="btn btn--play movie-card__button"
                  type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton
                  film={card}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresListWrapped
          />

          <MoviesListWrapped
            currentPage={PageNames.MAIN}
          />
        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  card: CustomPropTypes.FILM,
  onPlayClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  card: getFilm(state),
});


export default connect(mapStateToProps)(Main);
