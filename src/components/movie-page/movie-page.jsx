import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviesList from '../movies-list/movies-list.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import MovieCardHero from '../movie-card-hero/movie-card-hero.jsx';
import PageOverview from '../page-overview/page-overview.jsx';
import MovieCardDetails from '../movie-card-details/movie-card-details.jsx';
import PageReviews from '../page-reviews/page-reviews.jsx';
import {CustomPropTypes} from '../../utils/props.js';
import {PageNames} from '../../const.js';
import {ActionCreator} from '../../reducer/state/state';
import {Operations as DataOperations} from '../../reducer/data/data';
import withShowMore from '../../hocs/with-show-more';

const VideoPlayerFullWrapped = withShowMore(MoviesList);
class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {activeFilm, loadFilmInformation} = this.props;
    loadFilmInformation(activeFilm);
  }

  componentDidUpdate() {
    const {activeFilm, loadFilmInformation} = this.props;
    loadFilmInformation(activeFilm);

  }

  render() {
    const {activeFilm, filmReviews,
      renderMovieNavTabs,
      activeTab} = this.props;

    const renderActiveTab = () => {
      switch (activeTab) {
        case `Overview`:
          return <PageOverview
            rating={activeFilm.rating}
            scores={activeFilm.scores}
            description={activeFilm.description}
            director={activeFilm.director}
            starring={activeFilm.starring}
          />;
        case `Details`:
          return <MovieCardDetails
            director={activeFilm.director}
            genre={activeFilm.genre}
            filmDurationTime={activeFilm.filmDurationTime}
            starring={activeFilm.starring}
            date={activeFilm.date}
          />;
        case `Reviews`:
          return <PageReviews
            filmReviews={filmReviews}
          />;
        default:
          return ``;
      }
    };

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <MovieCardHero
            activeFilm={activeFilm}
          />

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={activeFilm.poster} alt={activeFilm.title} width={218} height={327} />
              </div>

              <div className="movie-card__desc">
                {renderMovieNavTabs()}
                {renderActiveTab()}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__movies-list">
              <VideoPlayerFullWrapped
                currentPage={PageNames.FILM_DETAILS}
              />
            </div>
          </section>

          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}

MoviePage.propTypes = {
  activeFilm: CustomPropTypes.FILM,
  filmReviews: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(CustomPropTypes.REVIEWS),
    PropTypes.bool,
  ]),
  renderMovieNavTabs: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  loadFilmInformation: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loadFilmInformation(film) {
    dispatch(ActionCreator.setActiveFilm(film));
    dispatch(ActionCreator.changeFilter(film.genre));
    dispatch(DataOperations.loadFilmReviews(film.id));
  },
});

export default connect(null, mapDispatchToProps)(MoviePage);
