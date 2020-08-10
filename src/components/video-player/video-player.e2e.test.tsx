import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';
import {card} from '../../test-data';

configure({
  adapter: new Adapter(),
});

describe(`Test VideoPlayer component`, () => {

  it(`VideoPlayer has play state`, () => {
    const isPlaying = false;

    const videoComponent = mount(
        <VideoPlayer
          isPlaying={isPlaying}
          source={card.preview}
          poster={card.poster}
        />
    );

    expect(videoComponent.props().isPlaying).toBe(isPlaying);
  });

  it(`VideoPlayer has pause state`, () => {
    const isPlaying = true;

    const videoComponent = mount(
        <VideoPlayer
          isPlaying={isPlaying}
          source={card.preview}
          poster={card.poster}
        />
    );

    expect(videoComponent.props().isPlaying).toBe(isPlaying);
  });
});
