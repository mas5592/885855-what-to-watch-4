import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';
import {card} from '../../utils/test-data.js';

describe(`VideoPlayer`, () => {
  it(`Should render VideoPlayer component`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            film={card}
            muted = {true}
            onplaying = {true}
          />, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

