import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null
    };

    this.filmClickHandler = this.filmClickHandler.bind(this);
  }

  filmClickHandler(film) {
    this.setState({
      activeFilm: film
    });
  }

  renderApp() {
    const {promo, films} = this.props;
    const {activeFilm} = this.state;

    if (activeFilm) {
      return <MovieCard
        film={activeFilm}
        films={films}
        onFilmClick={this.filmClickHandler}
      />;
    }

    return (
      <Main
        promo={promo}
        films={films}
        onFilmClick={this.filmClickHandler}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/dev-movie">
            <MovieCard
              film={this.props.films[0]}
              films={this.props.films}
              onFilmClick={this.filmClickHandler}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired,
  films: PropTypes.array.isRequired
};

export default App;
