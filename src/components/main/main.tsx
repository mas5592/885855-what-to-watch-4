import * as React from 'react';
import GenresList from '../genres-list/genres-list';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import MoviesList from '../movies-list/movies-list';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import MyListBtn from '../my-list-btn/my-list-btn';
import {AppRoute, PageNames} from '../../const';
import {getFilm} from '../../reducer/data/selectors';
import withMovieNavTabs from '../../hocs/with-movie-nav-tabs';
import withShowMore from '../../hocs/with-show-more';
import {FilmType} from '../../types';

const MoviesListWrapped = withShowMore(withMovieNavTabs(MoviesList));
const GenresListWrapped = withMovieNavTabs(GenresList);

interface Props {
  card: FilmType;
  onPlayClick: () => void;
}

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const {card} = props;
  const {
    coverBackground,
    date,
    genre,
    id,
    poster,
    title,
  } = card;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={coverBackground}
            alt={title} />
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
                height={327}
              />
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
                  type="button"
                >
                  <svg viewBox="0 0 19 19"
                    width={19}
                    height={19}>
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListBtn
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

const mapStateToProps = (state) => ({
  card: getFilm(state),
});

export default connect(mapStateToProps)(Main);

