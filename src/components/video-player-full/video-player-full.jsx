import React from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from '../../utils/props.js';
import history from '../../history.js';

const VideoPlayerFull = ({
  isPlaying,
  onIsPlayingChange,
  onSetFullScreen,
  card,
  children,
  duration,
  currentTime,
  leftTime,
}) => {
  const {title} = card;

  return (
    <div className="player">
      {children}

      <button onClick={() => history.goBack()} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentTime} max={duration}></progress>
            <div className="player__toggler" style={{left: ((currentTime * 100) / duration) + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{leftTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={() => onIsPlayingChange()}
          >
            {isPlaying ?
              <React.Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </React.Fragment> :
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </React.Fragment>}
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen"
            onClick={() => onSetFullScreen()}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayerFull.propTypes = {
  children: PropTypes.element.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number,
  card: CustomPropTypes.FILM,
  isPlaying: PropTypes.bool.isRequired,
  leftTime: PropTypes.string.isRequired,
  onIsPlayingChange: PropTypes.func.isRequired,
  onSetFullScreen: PropTypes.func.isRequired,

};

export default VideoPlayerFull;
