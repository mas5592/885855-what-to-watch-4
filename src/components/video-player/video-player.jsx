import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false
    };

    this.handleVideoPlay = this.handleVideoPlay.bind(this);
  }

  handleVideoPlay() {
    const video = this._videoRef.current;

    if (video.paused) {
      video.play();
      this.setState({isPlaying: true});
    } else {
      video.pause();
      this.setState({isPlaying: false});
    }
  }

  componentDidMount() {
    this.setState({isPlaying: this.props.autoPlay});
  }

  render() {
    const {film, muted, autoPlay} = this.props;

    return (
      <video
        ref={this._videoRef}
        muted={muted}
        controls
        poster={film.poster}
        width="100%"
        autoPlay={autoPlay}
        onClick={this.handleVideoPlay}
      >
        <source src={film.trailerUrl} />
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    poster: PropTypes.string,
    previewUrl: PropTypes.string,
    coverBackground: PropTypes.string,
    backgroundColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    count: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.string,
    genre: PropTypes.string,
    releaseYear: PropTypes.number,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoUrl: PropTypes.string,
    trailerUrl: PropTypes.string
  }).isRequired,
  muted: PropTypes.bool.isRequired,
  autoPlay: PropTypes.bool.isRequired
};

export default VideoPlayer;
