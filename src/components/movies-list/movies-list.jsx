import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: this.props.films[0]
    };

    this.handleCardHover = this.handleCardHover.bind(this);
    this.handlerFilmClick = this.handlerFilmClick.bind(this);
  }

  handleCardHover(id) {
    this.setState({
      activeCard: id
    });
  }

  handlerFilmClick(film) {
    this.props.onFilmClick(film);
  }

  render() {
    const {films} = this.props;

    return (
      <div
        className="catalog__movies-list">
        {films.map((film) => (
          <Card
            key={film.id}
            film={film}
            onMouseOver={this.handleCardHover}
            onFilmClick={this.handlerFilmClick}
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
