import React from 'react';
import PropTypes from 'prop-types';
import MovieNavTabs from '../movie-nav-tabs/movie-nav-tabs.jsx';
import MoviesSimilar from '../movies-similar/movies-similar.jsx';
import withVideoPlay from '../../hocs/with-video-play/with-video-play.jsx';
import VideoPlayerFull from '../video-player-full/video-player-full.jsx';
import {connect} from 'react-redux';
import {loadFilms} from '../../reducer/data/selectors.js';
import PageHeader from '../page-header/page-header.jsx';
import PageFooter from '../page-footer/page-footer.jsx';

const VideoPlayerFullWrapped = withVideoPlay(VideoPlayerFull);

const MoviePage = ({film, onFilmCardClick, isVideoPlayerFull, onVisibilityChange, films}) => {
  return isVideoPlayerFull ? (
    <VideoPlayerFullWrapped
      onExitButtonClick={onVisibilityChange}
      film={film}
      autoPlay={false}
      muted={true}
    />
  ) : (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.coverBackground} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <PageHeader />
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={onVisibilityChange}
                >
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={film.poster}
                alt={film.name}
                width={218}
                height={327}
              />
            </div>

            <MovieNavTabs film={film} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesSimilar
            films={films}
            film={film}
            onFilmCardClick={onFilmCardClick}
          />
        </section>

        <PageFooter />
      </div>
      )
    </React.Fragment>
  );
};

MoviePage.propTypes = {
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
  films: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
  ).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  isVideoPlayerFull: PropTypes.bool.isRequired,
  onVisibilityChange: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  films: loadFilms(state)
});

export default connect(mapStateToProps)(MoviePage);
