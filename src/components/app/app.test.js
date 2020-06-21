import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {promo} from '../../data.js';

const films = [
  {
    id: 1,
    title: `Aviator`,
    src: `aviator.jpg`
  },
  {
    id: 2,
    title: `The Grand Budapest Hotel`,
    src: `bg-the-grand-budapest-hotel.jpg`
  }
];

it(`Render App`, () => {
  const appComponent = renderer
    .create(
        <App
          promo={promo}
          films={films}
        />
    )
    .toJSON();

  expect(appComponent).toMatchSnapshot();
});
