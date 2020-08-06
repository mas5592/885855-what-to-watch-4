import React from 'react';
import MovieCard from '../movie-card/movie-card.jsx';
import PropTypes from 'prop-types';
import withVideoPlay from '../../hocs/with-video-play';
import {CustomPropTypes} from '../../utils/props.js';

const MovieCardWrapped = withVideoPlay(MovieCard);

const MoviesList = (props) => {

  const {
    films,
    handleMovieCardHover,
    render} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <MovieCardWrapped
              key={film.id}
              film={film}
              handleMovieCardHover={handleMovieCardHover}
            />
          );
        })}
      </div>
      {render()}
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(CustomPropTypes.FILM).isRequired,
  handleMovieCardHover: PropTypes.func,
  render: PropTypes.func
};

export default MoviesList;
