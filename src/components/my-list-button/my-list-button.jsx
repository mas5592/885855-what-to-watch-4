import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import history from '../../history';
import {CustomPropTypes} from '../../utils/props.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {Operations as DataOperations} from '../../reducer/data/data.js';
import {AuthorizationStatus, AppRoute} from '../../const.js';

const MyListButton = ({
  film,
  authorizationStatus,
  changeIsFilmFavorite
}) => {
  const handleFilmListButtonClick = (isFavorite) => {
    return authorizationStatus === AuthorizationStatus.AUTH
      ? changeIsFilmFavorite(film.id, isFavorite)
      : history.push(AppRoute.LOGIN);
  };

  const myListAdd = (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => handleFilmListButtonClick(true)}
    >
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );

  const removeFromMyList = (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => handleFilmListButtonClick(false)}
    >
      <svg viewBox="0 0 18 14" width={18} height={14}>
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
    </button>
  );

  return (
    <React.Fragment>
      {!film.isFavorite ? myListAdd : removeFromMyList}
    </React.Fragment>
  );
};

MyListButton.propTypes = {
  film: CustomPropTypes.FILM,
  authorizationStatus: PropTypes.string.isRequired,
  changeIsFilmFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeIsFilmFavorite(filmId, isFavorite) {
    dispatch(DataOperations.changeIsFilmFavorite(filmId, isFavorite));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
