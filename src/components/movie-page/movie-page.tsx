import * as React from 'react';
import {FilmType, ReviewType} from '../../types';
import {connect} from 'react-redux';
import MoviesList from '../movies-list/movies-list';
import PageFooter from '../page-footer/page-footer';
import MovieCardHero from '../movie-card-hero/movie-card-hero';
import PageOverview from '../page-overview/page-overview';
import MovieCardDetails from '../movie-card-details/movie-card-details';
import PageReviews from '../page-reviews/page-reviews';
import {PageNames} from '../../const';
import {ActionCreator} from '../../reducer/state/state';
import {Operations as DataOperations} from '../../reducer/data/data';
import withShowMore from '../../hocs/with-show-more';
import {ListFilters} from '../../const';

interface Props {
  activeFilm: FilmType;
  activeTab: string;
  filmReviews: Array<ReviewType>;
  loadFilmInformation(film: FilmType): void;
  renderMovieNavTabs(): void;
}

const VideoPlayerFullWrapped = withShowMore(MoviesList);

class MoviePage extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      activeFilm,
      loadFilmInformation
    } = this.props;

    loadFilmInformation(activeFilm);
  }

  componentDidUpdate() {
    const {
      activeFilm,
      loadFilmInformation
    } = this.props;

    loadFilmInformation(activeFilm);
  }

  render() {
    const {activeFilm, filmReviews,
      renderMovieNavTabs,
      activeTab} = this.props;

    const renderActiveTab = () => {
      switch (activeTab) {
        case ListFilters.OVERVIEW:
          return <PageOverview
            activeFilm={activeFilm}
          />;
        case ListFilters.DETAILS:
          return <MovieCardDetails
            activeFilm={activeFilm}
          />;
        case ListFilters.REVIEWS:
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
                <img
                  src={activeFilm.poster}
                  alt={activeFilm.title}
                  width={218}
                  height={327}
                />
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

const mapDispatchToProps = (dispatch) => ({
  loadFilmInformation(film) {
    dispatch(ActionCreator.setActiveFilm(film));
    dispatch(ActionCreator.changeFilter(film.genre));
    dispatch(DataOperations.loadFilmReviews(film.id));
  },
});

export default connect(null, mapDispatchToProps)(MoviePage);
