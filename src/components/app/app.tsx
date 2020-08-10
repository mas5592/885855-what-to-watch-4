import * as React from 'react';
import {Route, Router, Switch, Redirect} from 'react-router-dom';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import {connect} from 'react-redux';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';
import PrivateRoute from '../private-route/private-route';
import VideoPlayerFull from '../video-player-full/video-player-full';
import ErrorPage from '../error-page/error-page';
import Loading from '../loading/loading';
import history from '../../history';
import {AppRoute, AuthorizationStatus, FILTER_ALL_GENRES} from '../../const';
import withReview from '../../hocs/with-review/with-review';
import withMovieNavTabs from '../../hocs/with-movie-nav-tabs';
import withVideoPlayFull from '../../hocs/with-video-play-full';
import {getFilms, getFilm, getIsLoadError, getIsLoading} from '../../reducer/data/selectors';
import {ActionCreator} from '../../reducer/state/state';
import {getIsFilmPlayerActive} from '../../reducer/state/selectors';
import {getAuthorizationStatus, getAuthorizationProgress} from '../../reducer/user/selectors';
import {Operations as UserOperation} from '../../reducer/user/user';
import {Operations as DataOperations} from '../../reducer/data/data';
import {FilmType} from '../../types';

const VideoPlayerWrapped = withVideoPlayFull(VideoPlayerFull);
const AddReviewWrapped = withReview(AddReview);
const MoviePageWrapped = withMovieNavTabs(MoviePage);

interface Props {
  isLoadError: boolean;
  isAuthorizationProgress: boolean;
  isLoading: boolean;
  authorizationStatus: string;
  setActiveGenre(genre: string): void;
  loadPromo(): void;
  card: FilmType;
  isVideoPlayer: boolean;
  films: Array<FilmType>;
  login: string;
}

const App: React.FC<Props> = (props: Props) => {
  const {
    films,
    login,
    authorizationStatus,
    isLoadError,
    card,
    loadPromo,
    setActiveGenre,
    isAuthorizationProgress,
    isLoading
  } = props;

  const renderMainPage = () => {
    setActiveGenre(FILTER_ALL_GENRES);
    return !isLoadError ? <Main /> : <ErrorPage />;
  };

  return (
    <React.Fragment>
      {!isLoading && !isAuthorizationProgress ?
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.ROOT}
              render={renderMainPage}
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
            <Route exact path={`${AppRoute.PAGE}/:id`}
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
  onPlayBtnClick(isVideoPlayer) {
    dispatch(ActionCreator.playFullFilm(isVideoPlayer));
  },
  handlerBtnCloseClick(isVideoPlayer) {
    dispatch(ActionCreator.closeFullFilm(isVideoPlayer));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  setActiveGenre(genre) {
    dispatch(ActionCreator.changeFilter(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
