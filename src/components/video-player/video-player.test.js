import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';
import {film} from '../../data.js';

it(`Should render VideoPlayer component`, () => {
  const tree = renderer
    .create(<VideoPlayer film={film} muted={true} autoPlay={true} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
