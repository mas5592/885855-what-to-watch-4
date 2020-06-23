import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';
import {generateId} from '../../utils/utils.js';

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: null
    };
  }

  handleCardHover(film) {
    this.setState({
      currentFilm: film
    });
  }

  render() {
    const {films, onFilmTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <Card
              key = {generateId()}
              film = {film}
              onFilmTitleClick = {onFilmTitleClick}
              onFilmHover={this.handleCardHover}
            />
          );
        })}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
      })
  ).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired
};
