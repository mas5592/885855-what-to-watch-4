import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/state/state';
import {getFilmsByGenre} from '../../reducer/data/selectors';
import {getActiveGenre} from '../../reducer/state/selectors';

const GenresList = ({genres, activeGenre, onGenreItemClick}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return (<li
          key={`${genre}-${index}`}
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreItemClick(genre);
            }}>{genre}</a>
        </li>);
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
  activeGenre: PropTypes.string,
  onGenreItemClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  genres: getFilmsByGenre(state),
  activeGenre: getActiveGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreItemClick(genre) {
    dispatch(ActionCreator.changeFilter(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
