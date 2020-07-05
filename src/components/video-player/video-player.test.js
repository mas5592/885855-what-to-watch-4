import React from 'react';
import rerender from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';
import {film} from '../../data.js';

it(`Should VideoPlayer render correctly`, () => {
  const tree = rerender.create(
      <VideoPlayer
        isMuted={true}
        isPlaying={true}
        poster={film.poster}
        src={film.preview}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
