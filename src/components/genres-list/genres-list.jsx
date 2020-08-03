import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FILTER_ALL_GENRES} from '../../data.js';
import {ActionCreator} from '../../reducer/state/state.js';
import MoviesList from '../movies-list/movies-list.jsx';
import withActiveMovieItem from '../../hocs/with-active-movie-item/with-active-movie-item.jsx';
import {getGenre, getShowedFilms} from '../../reducer/state/selectors.js';
import {loadFilms, loadFilmsByGenre} from '../../reducer/data/selectors.js';

const MoviesListWrapped = withActiveMovieItem(MoviesList);

class GenresList extends PureComponent {
  constructor(props) {
    super(props);
  }

  getGenresList(films) {
    return [FILTER_ALL_GENRES, ...new Set(films.map((film) => film.genre))];
  }

  render() {
    const {
      films,
      filteredFilms,
      genre,
      changeGenre,
      onFilmCardClick,
      resetShowedFilmsAmount
    } = this.props;

    return (
      <>
        <ul className="catalog__genres-list">
          {this.getGenresList(films).map((availableGenre, index) => (
            <li
              className={`catalog__genres-item ${
                genre === availableGenre ? `catalog__genres-item--active` : ``
              }`}
              key={availableGenre + index}
            >
              <a
                className="catalog__genres-link"
                onClick={() => {
                  changeGenre(availableGenre);
                  resetShowedFilmsAmount();
                }}
              >
                {availableGenre}
              </a>
            </li>
          ))}
        </ul>

        <MoviesListWrapped
          films={filteredFilms}
          onFilmCardClick={onFilmCardClick}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  films: loadFilms(state),
  filteredFilms: loadFilmsByGenre(state),
  showedFilms: getShowedFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  resetShowedFilmsAmount() {
    dispatch(ActionCreator.resetShowedFilmsAmount());
  }
});

GenresList.propTypes = {
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
  ),
  filteredFilms: PropTypes.arrayOf(
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
  ),
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  showedFilms: PropTypes.number.isRequired,
  resetShowedFilmsAmount: PropTypes.func.isRequired
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
