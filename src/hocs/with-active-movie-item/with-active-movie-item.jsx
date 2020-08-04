import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {PLAYBACK_DELAY_TIMEOUT} from '../../data.js';

const withActiveMovieItem = (Component) => {
  class WithActiveMovieItem extends PureComponent {
    constructor(props) {
      super(props);

      this.playbackTimeout = null;

      this.state = {
        activeFilmId: null,
        isPlaying: false
      };

      this.filmCardMouseOverHandler = this.filmCardMouseOverHandler.bind(
          this
      );
      this.filmCardMouseOutHandler = this.filmCardMouseOutHandler.bind(this);
      this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay(activeFilmId) {
      this.playbackTimeout = setTimeout(() => {
        if (this.state.activeFilmId === activeFilmId) {
          this.setState(() => ({
            isPlaying: true
          }));
        }
      }, PLAYBACK_DELAY_TIMEOUT);
    }

    filmCardMouseOverHandler(activeFilmId) {
      this.setState(
          () => ({
            activeFilmId
          }),
          () => this.togglePlay(activeFilmId)
      );
    }

    filmCardMouseOutHandler() {
      this.setState(() => ({
        activeFilmId: null,
        isPlaying: false
      }));
    }

    componentWillUnmount() {
      if (this.playbackTimeout) {
        clearTimeout(this.playbackTimeout);
      }
    }

    render() {
      const {activeFilmId, isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          activeFilmId={activeFilmId}
          isPlaying={isPlaying}
          onFilmCardMouseOver={this.filmCardMouseOverHandler}
          onFilmCardMouseOut={this.filmCardMouseOutHandler}
        />
      );
    }
  }

  WithActiveMovieItem.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ),
    onFilmCardClick: PropTypes.func.isRequired
  };

  return WithActiveMovieItem;
};

export default withActiveMovieItem;
