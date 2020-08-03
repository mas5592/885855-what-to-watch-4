import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayerFull = ({
  isPlaying,
  onPlayButtonClick,
  onFullscreenButtonClick,
  getPlaybackProgress,
  getElapsedTime,
  videoRef,
  muted,
  autoPlay,
  film,
  onExitButtonClick,
  onLoadedMetadata,
  onTimeUpdate
}) => {
  return (
    <div className="player">
      <video
        ref={videoRef}
        muted={muted}
        poster={film.coverBackground}
        width="100%"
        autoPlay={autoPlay}
        onClick={onPlayButtonClick}
        className="player__video"
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
      >
        <source src={film.trailerUrl} />
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={onExitButtonClick}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={getPlaybackProgress()}
              max="100"
            />
            <div
              className="player__toggler"
              style={{left: `${getPlaybackProgress()}%`}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{getElapsedTime()}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayButtonClick}
          >
            {isPlaying ? (
                <>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </>
            ) : (
                <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </>
            )}
          </button>
          <div className="player__name">{film.name}</div>
          <button
            type="button"
            className="player__full-screen"
            onClick={onFullscreenButtonClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayerFull.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    coverBackground: PropTypes.string.isRequired,
    trailerUrl: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  muted: PropTypes.bool.isRequired,
  autoPlay: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired,
  getPlaybackProgress: PropTypes.func.isRequired,
  getElapsedTime: PropTypes.func.isRequired,
  videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]).isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  onLoadedMetadata: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired
};

export default VideoPlayerFull;
