import React, {PureComponent} from 'react';

const withVideoPlay = (Component) => {
  class WithVideoPlay extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._setPlayingFilm = this._setPlayingFilm.bind(this);
      this._handleMovieCardHover = this._handleMovieCardHover.bind(this);
    }

    _setPlayingFilm(isPlaying) {
      this.setState({
        isPlaying
      });
    }

    _handleMovieCardHover(film) {
      this.setState({
        activeCard: film,
      });
    }

    render() {
      const {isPlaying} = this.state;

      return <Component
        {...this.props}
        isPlaying={isPlaying}
        setPlayingFilm={this._setPlayingFilm}
        handleMovieCardHover={this._handleMovieCardHover}
      />;
    }
  }

  WithVideoPlay.propTypes = {};

  return WithVideoPlay;
};

export default withVideoPlay;
