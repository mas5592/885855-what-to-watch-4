import React from 'react';
import PropTypes from 'prop-types';

const Card = ({film, onFilmHover, onFilmTitleClick}) => {
  const {title, src, id} = film;

  return (
    <article className="small-movie-card catalog__movies-card" id={id} onMouseOver = {onFilmHover}>
      <div className="small-movie-card__image">
        <img src={`img/${src}`} alt={title} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title" onClick={onFilmTitleClick}>
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

Card.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  onFilmHover: PropTypes.func.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired
};

export default Card;
