import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayerFull from './video-player-full.jsx';
import {films} from '../../data.js';

it(`Should render VideoPlayerFull component`, () => {
  const tree = renderer
    .create(
        <VideoPlayerFull
          film={films[0]}
          autoPlay={false}
          muted={true}
          isPlaying={false}
          getElapsedTime={() => {}}
          getPlaybackProgress={() => {}}
          onPlayButtonClick={() => {}}
          onFullscreenButtonClick={() => {}}
          onExitButtonClick={() => {}}
          onLoadedMetadata={() => {}}
          onTimeUpdate={() => {}}
          videoRef={React.createRef()}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
