import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card';
import {MOCK_TITLE} from '../../data.js';

it(`Render catalog card`, () => {
  const cardComponent = renderer
    .create(
        <Card
          title={MOCK_TITLE}
        />
    )
    .toJSON();

  expect(cardComponent).toMatchSnapshot();
});
