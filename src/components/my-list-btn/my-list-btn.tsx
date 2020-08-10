import * as React from 'react';
import {connect} from 'react-redux';
import history from '../../history';
import {AuthorizationStatus, AppRoute} from '../../const';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {Operations as DataOperations} from '../../reducer/data/data';
import {FilmType} from '../../types';

interface Props {
  film: FilmType;
  authorizationStatus: string;
  changeIsFilmFavorite(filmId: number, isFavorite: boolean): void;
}

const MyListBtn: React.FC<Props> = (props: Props) => {

  const {
    authorizationStatus,
    film,
    changeIsFilmFavorite
  } = props;

  const handleFilmListBtnClick = (isFavorite) => {
    return authorizationStatus === AuthorizationStatus.AUTH
      ? changeIsFilmFavorite(film.id, isFavorite)
      : history.push(AppRoute.LOGIN);
  };

  const addToMyList = (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => handleFilmListBtnClick(true)}
    >
      <svg
        viewBox="0 0 19 20"
        width={19}
        height={20}
      >
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );

  const removeFromMyList = (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={() => handleFilmListBtnClick(false)}
    >
      <svg
        viewBox="0 0 18 14"
        width={18}
        height={14}
      >
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
    </button>
  );

  return (
    <React.Fragment>
      {!film.isFavorite ? addToMyList : removeFromMyList}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeIsFilmFavorite(movieId, isFavorite) {
    dispatch(DataOperations.changeIsFilmFavorite(movieId, isFavorite));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListBtn);
