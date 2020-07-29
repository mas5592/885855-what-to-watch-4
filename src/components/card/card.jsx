import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.timerId = null;
    this.state = {
      isPlaying: false,
    };

    this.onArticleMouseOver = this.onArticleMouseOver.bind(this);
    this.filmClickHandler = this.filmClickHandler.bind(this);
    this.handlerMouseEnter = this.handlerMouseEnter.bind(this);
    this.handlerMouseLeave = this.handlerMouseLeave.bind(this);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  onArticleMouseOver() {
    const {film, onMouseOver} = this.props;
    onMouseOver(film.id);
  }

  filmClickHandler(event) {
    const {onFilmClick, film} = this.props;
    event.preventDefault();
    onFilmClick(film);
  }

  handlerMouseEnter() {
    this.timerId = setTimeout(() =>
      this.setState({
        isPlaying: true
      }), 1000);
  }

  handlerMouseLeave() {
    clearTimeout(this.timerId);
    this.setState({
      isPlaying: false
    });
  }

  render() {
    const {film} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={this.onArticleMouseOver}
        onMouseEnter={this.handlerMouseEnter}
        onMouseLeave={this.handlerMouseLeave}
      >
        <div
          className="small-movie-card__image"
          onClick={this.filmClickHandler}
        >
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
            onClick={this.filmClickHandler}
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
  onMouseOver: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired,
};

export default Card;
