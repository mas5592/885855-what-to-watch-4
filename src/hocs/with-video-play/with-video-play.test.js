import React from 'react';
import renderer from 'react-test-renderer';
import withVideoPlay from './with-video-play.jsx';
import {film} from '../../data.js';

const MockComponent = () => <div></div>;
const MockComponentWrapped = withVideoPlay(MockComponent);

it(`withVideoPlay is rendered correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped
          film={film}
          muted={true}
          autoPlay={false}
          onExitButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
