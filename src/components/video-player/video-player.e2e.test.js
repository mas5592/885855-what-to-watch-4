import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';
import {film} from '../../data.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should play video on click`, () => {
  const fakePlay = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});

  const videoPlayer = mount(
      <VideoPlayer film={film} muted={true} autoPlay={false} />
  );

  expect(videoPlayer.state(`isPlaying`)).toBe(false);
  videoPlayer.simulate(`click`);
  expect(videoPlayer.state(`isPlaying`)).toBe(true);

  expect(fakePlay).toHaveBeenCalled();
  fakePlay.mockRestore();
});
