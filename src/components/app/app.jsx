import React, {PureComponent} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null,
      isVideoPlayerFull: false
    };
    this.filmClickHandler = this.filmClickHandler.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  filmClickHandler(activeFilm) {
    this.setState({activeFilm});
    this.props.loadComments(activeFilm.id);
  }

  handleVisibility() {
    this.setState({
      isVideoPlayerFull: !this.state.isVideoPlayerFull
    });
  }

  _renderApp() {
    const {activeFilm, isVideoPlayerFull} = this.state;

    if (activeFilm !== null) {
      return (
        <MoviePage
          film={activeFilm}
          onFilmCardClick={this.filmClickHandler}
          isVideoPlayerFull={isVideoPlayerFull}
          onVisibilityChange={this.handleVisibility}
        />
      );
    }

    return (
      <Main
        onFilmCardClick={this.filmClickHandler}
        isVideoPlayerFull={isVideoPlayerFull}
        onVisibilityChange={this.handleVisibility}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  loadComments: PropTypes.func.isRequired
};

export default App;
