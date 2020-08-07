import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../utils/props.js';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._video = createRef();

    this._videoPlayerSetTimeout = null;
  }

  componentDidMount() {
    const {film} = this.props;
    const {videoPreview, poster} = film;
    const video = this._video.current;

    video.src = videoPreview;
    video.poster = poster;
    video.muted = true;
  }

  componentWillUnmount() {
    const video = this._video.current;

    video.onplay = null;
    video.src = ``;
    video.poster = ``;
    video.muted = null;
  }

  render() {
    return (
      <video
        className="player__video"
        ref={this._video}
      />
    );
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._video.current;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  film: CustomPropTypes.FILM,
  isPlaying: PropTypes.bool
};
