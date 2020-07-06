import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';
import {generateId} from '../../utils/utils.js';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: this.props.films[0]
    };

    this.handleCardHover = this.handleCardHover.bind(this);
    this.filmClick = this.filmClick.bind(this);
  }

  handleCardHover(id) {
    this.setState({
      activeCard: id
    });
  }

  filmClick(film) {
    this.props.onFilmClick(film);
  }

  render() {
    const {films} = this.props;

    return (
      <div
        className="catalog__movies-list">
        {films.map((film) => (
          <Card
            key={generateId()}
            film={film}
            onFilmHover={this.handleCardHover}
            onFilmClick={this.filmClick}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
  ).isRequired,
  onFilmClick: PropTypes.func.isRequired
};

export default MoviesList;
