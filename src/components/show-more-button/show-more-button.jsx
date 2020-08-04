import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reducer/state/state.js';
import {loadFilms} from '../../reducer/data/selectors.js';
import {getShowedFilms} from '../../reducer/state/selectors.js';

const ShowMoreButton = ({films, showedFilms, showMoreFilms}) => {
  return showedFilms < films.length ? (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={showMoreFilms}
      >
        Show more
      </button>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  films: loadFilms(state),
  showedFilms: getShowedFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms() {
    dispatch(ActionCreator.showMoreFilms());
  }
});

ShowMoreButton.propTypes = {
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
  showMoreFilms: PropTypes.func.isRequired,
  showedFilms: PropTypes.number.isRequired
};

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
