import React from 'react';
import PropTypes from 'prop-types';
import GenresList from '../genres-list/genres-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import withVideoPlay from '../../hocs/with-video-play/with-video-play.jsx';
import VideoPlayerFull from '../video-player-full/video-player-full.jsx';
import {connect} from 'react-redux';
import {loadPromo} from '../../reducer/data/selectors.js';
import PageHeader from '../page-header/page-header.jsx';
import PageFooter from '../page-footer/page-footer.jsx';

const VideoPlayerFullWrapped = withVideoPlay(VideoPlayerFull);

const Main = ({onFilmCardClick, isVideoPlayerFull, onVisibilityChange, promo}) => {
  return isVideoPlayerFull ? (
    <VideoPlayerFullWrapped
      onExitButtonClick={onVisibilityChange}
      film={promo}
      autoPlay={false}
      muted={true}
    />
  ) : (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promo.coverBackground} alt={promo.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <PageHeader />
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={promo.poster}
                alt={promo.name}
                width={218}
                height={327}
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promo.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promo.genre}</span>
                <span className="movie-card__year">
                  {promo.releaseYear}
                </span>
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
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList onFilmCardClick={onFilmCardClick} />
          <ShowMoreButton />
        </section>
        <PageFooter />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  promo: PropTypes.shape({
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
  }),
  onFilmCardClick: PropTypes.func.isRequired,
  isVideoPlayerFull: PropTypes.bool.isRequired,
  onVisibilityChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  promo: loadPromo(state)
});

export default connect(mapStateToProps)(Main);
