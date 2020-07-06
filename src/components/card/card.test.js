import React from 'react';
import rerender from 'react-test-renderer';
import Card from './card.jsx';
import {film} from '../../data.js';

it(`Render catalog card`, () => {
  const cardComponent = rerender
    .create(<Card
      film={film}
      onFilmHover={() => { }}
      onFilmClick={() => { }}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

  expect(cardComponent).toMatchSnapshot();
});
