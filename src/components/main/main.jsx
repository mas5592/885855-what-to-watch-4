import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../movies-list/movies-list.jsx';
import {connect} from 'react-redux';
import {setCurrentGenre, setFilms} from '../../reducer.js';
import GenreList from '../genres-list/genres-list.jsx';
import {FILTER_ALL_GENRES} from '../../data.js';

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.filmClickHandler = this.filmClickHandler.bind(this);
  }

  componentDidMount() {
    this.props.onSetFilms(this.props.films);
  }

  filmClickHandler(film) {
    this.props.onFilmClick(film);
  }

  render() {
    const {
      promo,
      currentGenre,
      moviesList,
      onSetCurrentGenre,
      genres
    } = this.props;

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </div>
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width={218} height={327} />
              </div>
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{promo.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{promo.genre}</span>
                  <span className="movie-card__year">{promo.date}</span>
                </p>
                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width={19} height={20}>
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

            <GenreList
              genresList={genres}
              currentGenre={currentGenre}
              setCurrentGenre={onSetCurrentGenre}
            />

            <MoviesList
              films={moviesList}
              onFilmClick={this.filmClickHandler}
            />

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
          </section>
          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onSetCurrentGenre: PropTypes.func.isRequired,
  onSetFilms: PropTypes.func.isRequired,
  moviesList: PropTypes.array.isRequired,
  genres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired
};

const mapStateToProps = (state) => {
  const filmsByGenre = state.films.filter((film) => {
    if (state.currentGenre === FILTER_ALL_GENRES) {
      return true;
    }
    return film.genre === state.currentGenre;
  });

  const genres = state.films.map((film) => film.genre);
  const uniqueGenres = [FILTER_ALL_GENRES].concat(Array.from(new Set(genres)));

  return {
    currentGenre: state.currentGenre,
    moviesList: filmsByGenre,
    genres: uniqueGenres
  };
};

const mapDispatchToProps = {
  onSetCurrentGenre: setCurrentGenre,
  onSetFilms: setFilms
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
