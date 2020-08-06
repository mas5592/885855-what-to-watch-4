import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from './video-player.jsx';
import {card} from '../../utils/test-data.js';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test VideoPlayer component`, () => {

  it(`VideoPlayer has play state`, () => {
    const isPlaying = false;

    const videoComponent = mount(
        <VideoPlayer
          film={card}
          source={card.preview}
          poster={card.poster}
          isPlaying={isPlaying}
          muted
        />
    );

    expect(videoComponent.props().isPlaying).toBe(isPlaying);
  });

  it(`VideoPlayer has pause state`, () => {
    const isPlaying = true;

    const videoComponent = mount(
        <VideoPlayer
          film={card}
          source={card.preview}
          poster={card.poster}
          isPlaying={isPlaying}
          muted
        />
    );

    expect(videoComponent.props().isPlaying).toBe(isPlaying);
  });

});
