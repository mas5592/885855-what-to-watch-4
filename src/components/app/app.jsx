import React from 'react';
import {Route, Router, Switch, Redirect} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MyList from '../my-list/my-list.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import VideoPlayerFull from '../video-player-full/video-player-full.jsx';
import ErrorPage from '../error-page/error-page.jsx';
import Loading from '../loading/loading.jsx';
import history from '../../history.js';
import {CustomPropTypes} from '../../utils/props.js';
import {AppRoute, AuthorizationStatus, FILTER_ALL_GENRES} from '../../const';
import withReview from '../../hocs/with-review.js';
import withMovieNavTabs from '../../hocs/with-movie-nav-tabs.js';
import withVideoPlayFull from '../../hocs/with-video-play-full.js';
import {getFilms, getFilm, getIsLoadError, getIsLoading} from '../../reducer/data/selectors';
import {ActionCreator} from '../../reducer/state/state';
import {getIsFilmPlayerActive} from '../../reducer/state/selectors';
import {getAuthorizationStatus, getAuthorizationProgress} from '../../reducer/user/selectors';
import {Operations as UserOperation} from '../../reducer/user/user';
import {Operations as DataOperations} from '../../reducer/data/data.js';

const VideoPlayerWrapped = withVideoPlayFull(VideoPlayerFull);
const AddReviewWrapped = withReview(AddReview);
const MoviePageWrapped = withMovieNavTabs(MoviePage);

const App = (props) => {
  const {
    authorizationStatus,
    films,
    card,
    isAuthorizationProgress,
    isLoadError,
    isLoading,
    loadPromo,
    login,
    setActiveGenre,
  } = props;

  const renderMain = () => {
    setActiveGenre(FILTER_ALL_GENRES);
    return !isLoadError ? <Main /> : <ErrorPage />;
  };

  return (
    <React.Fragment>
      {!isLoading && !isAuthorizationProgress ?
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.ROOT}
              render={renderMain}
            />;
            <Route exact path={AppRoute.LOGIN}
              render={() => {
                return authorizationStatus !== AuthorizationStatus.AUTH ?
                  <SignIn
                    onFormSubmit={login}
                  /> :
                  <Redirect
                    to={AppRoute.ROOT}
                  />;
              }}
            />
            <Route
              exact path={`${AppRoute.PAGE}/:id`}
              render={(routeProps) => {
                const filmId = Number(routeProps.match.params.id);

                const activeFilm = films.find((film) => film.id === filmId);

                return <MoviePageWrapped
                  routeProps={routeProps}

                  activeFilm={activeFilm}
                />;
              }}
            />
            <Route exact path={`${AppRoute.VIDEO_PLAYER}/:id`}
              render={(routeProps) => {
                return <VideoPlayerWrapped
                  routeProps={routeProps}
                  card={card}
                />;
              }}
            />
            <PrivateRoute exact path={`${AppRoute.PAGE}/:id/review`}
              render={(routeProps) => {
                return <AddReviewWrapped
                  routeProps={routeProps}
                />;
              }}>
            </PrivateRoute>
            <PrivateRoute
              exact path={AppRoute.MY_LIST}
              render={(routeProps) => {
                loadPromo();
                return <MyList
                  routeProps={routeProps}
                />;
              }}
            />
            <Route component={ErrorPage}
            />
          </Switch>
        </Router>
        : <Loading />}
    </React.Fragment>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string,
  card: CustomPropTypes.FILM,
  films: PropTypes.arrayOf(CustomPropTypes.FILM),
  isAuthorizationProgress: PropTypes.bool,
  isLoadError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isVideoPlayer: PropTypes.bool,
  loadPromo: PropTypes.func,
  login: PropTypes.func,
  onReviewSubmit: PropTypes.func,
  setActiveGenre: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  card: getFilm(state),
  films: getFilms(state),
  isAuthorizationProgress: getAuthorizationProgress(state),
  isLoadError: getIsLoadError(state),
  isLoading: getIsLoading(state),
  isVideoPlayer: getIsFilmPlayerActive(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadPromo() {
    dispatch(DataOperations.loadFavoriteFilms());
  },
  onPlayButtonClick(isVideoPlayer) {
    dispatch(ActionCreator.playFullFilm(isVideoPlayer));
  },
  handlerBtnCloseClick(isVideoPlayer) {
    dispatch(ActionCreator.closeFulFilm(isVideoPlayer));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onReviewSubmit(filmId, review) {
    dispatch(DataOperations.pushReview(filmId, review));
  },
  setActiveGenre(genre) {

    dispatch(ActionCreator.changeFilter(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
