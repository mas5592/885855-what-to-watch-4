import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card.jsx';
import {generateId} from '../../utils/utils.js';

const handleCardHover = () => {};

const MoviesList = (props) => {
  const {films, onFilmTitleClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return (
          <Card
            key = {generateId()}
            film = {film}
            onFilmClickHover = {handleCardHover}
            onFilmTitleClick = {onFilmTitleClick}
          />);
      })}
    </div>
  );
};

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

export default MoviesList;

