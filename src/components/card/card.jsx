import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player.jsx';

class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {film, onFilmHover, onFilmClick} = this.props;

    const filmHover = () => {
      onFilmHover(film.id);
    };

    const filmClick = (event) => {
      event.preventDefault();
      onFilmClick(film);
    };

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={filmHover}
        onMouseEnter={() => {
          this.timerId = setTimeout(() =>
            this.setState({
              isPlaying: true
            }), 1000);
        }}

        onMouseLeave={() => {
          clearTimeout(this.timerId);
          this.setState({
            isPlaying: false
          });
        }}
      >
        <div className="small-movie-card__image" onClick={filmClick}>
          <VideoPlayer
            isMuted={true}
            isPlaying={this.state.isPlaying}
            poster={film.img}
            src={film.preview}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html"
            onClick={filmClick}
          >
            {film.title}
          </a>
        </h3>
      </article>
    );
  }
}

Card.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  onFilmHover: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired,
};

export default Card;
